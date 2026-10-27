import { ArcadeBadge, BadgeCategory } from '../types/arcade';
import { REPOSITORY_BADGES } from '../data/defaultBadges';

/**
 * Validates and sanitizes a URL. Only allows http: and https: protocols.
 */
export function sanitizeUrl(input: string): string | null {
  try {
    let clean = input.trim();
    if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
      clean = `https://${clean}`;
    }
    const parsed = new URL(clean);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

/**
 * Sanitizes plain text strings, preventing script injection or excessive lengths.
 */
export function sanitizeText(text: string, maxLength: number = 200): string {
  if (!text) return '';
  return text
    .replace(/[<>'"&]/g, (char) => {
      switch (char) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case "'": return '&#39;';
        case '"': return '&quot;';
        case '&': return '&amp;';
        default: return char;
      }
    })
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // remove control characters
    .trim()
    .slice(0, maxLength);
}

/**
 * Safely validates an image source URL.
 */
export function sanitizeImageUrl(src?: string | null): string | undefined {
  if (!src) return undefined;
  const clean = src.trim();
  if (clean.startsWith('https://') || clean.startsWith('http://')) {
    return clean.slice(0, 500);
  }
  return undefined;
}

/**
 * Validates that a date string is a valid ISO date YYYY-MM-DD.
 */
export function safeIsoDate(inputDate?: string | null): string {
  const fallback = new Date().toISOString().split('T')[0];
  if (!inputDate) return fallback;
  try {
    const d = new Date(inputDate);
    if (isNaN(d.getTime())) return fallback;
    const year = d.getFullYear();
    if (year < 2020 || year > 2035) return fallback;
    return d.toISOString().split('T')[0];
  } catch {
    return fallback;
  }
}

export function categorizeBadge(title: string): { category: BadgeCategory; pointsContribution: number } {
  const lower = title.toLowerCase();

  if (lower.includes('trivia')) {
    return { category: 'trivia', pointsContribution: 1 };
  }
  if (lower.includes('level ') || lower.includes('diabolical') || lower.includes('arcade game') || lower.includes('arcade challenge')) {
    return { category: 'game', pointsContribution: 1 };
  }
  if (lower.includes('milestone')) {
    if (lower.includes('tier 3') || lower.includes('24')) return { category: 'milestone', pointsContribution: 6 };
    if (lower.includes('tier 2') || lower.includes('16')) return { category: 'milestone', pointsContribution: 4 };
    return { category: 'milestone', pointsContribution: 2 };
  }
  if (lower.includes('certification') || lower.includes('hackathon') || lower.includes('cloud hero') || lower.includes('special')) {
    return { category: 'special', pointsContribution: 2 };
  }

  // Default to skill badge
  return { category: 'skill', pointsContribution: 0.5 };
}

/**
 * Smart Content Parser:
 * Capable of parsing:
 * 1. Raw HTML (e.g. from View Page Source or Inspect)
 * 2. Rendered plain text copied directly from the Google Cloud Skills Boost page
 * 3. JSON profile exports
 */
export function parseProfileContent(rawInput: string): { name: string; badges: ArcadeBadge[] } {
  if (!rawInput || typeof rawInput !== 'string') {
    return { name: 'Cloud Adventurer', badges: [] };
  }

  const trimmed = rawInput.trim();

  // 1. Try parsing as JSON first
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
    try {
      const parsedJson = JSON.parse(trimmed);
      if (Array.isArray(parsedJson) && parsedJson.length > 0 && parsedJson[0].name) {
        return {
          name: parsedJson[0].name || 'Imported Account',
          badges: Array.isArray(parsedJson[0].badges) ? parsedJson[0].badges : []
        };
      } else if (parsedJson.badges && Array.isArray(parsedJson.badges)) {
        return {
          name: parsedJson.name || 'Imported Account',
          badges: parsedJson.badges
        };
      }
    } catch {
      // Continue to HTML / text parsing
    }
  }

  // 2. If it has HTML tags, try DOM parsing
  if (trimmed.includes('<') && trimmed.includes('>')) {
    const sanitizedHtml = trimmed
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');

    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitizedHtml, 'text/html');

    let name = 'Cloud Adventurer';
    const nameSelectors = [
      'h1.ql-headline-medium',
      'h1.ql-title-large',
      'h1',
      '.profile-name',
      '.ql-subhead-1'
    ];
    for (const selector of nameSelectors) {
      const el = doc.querySelector(selector);
      const content = el?.textContent?.trim();
      if (content && content.length > 0 && content.length < 100) {
        name = content.replace(/^Profile of\s+/i, '');
        break;
      }
    }

    const badges: ArcadeBadge[] = [];
    const seenTitles = new Set<string>();

    const badgeCards = doc.querySelectorAll('.profile-badge, .profile-badges-item, .public-profile-badge');

    if (badgeCards.length > 0) {
      badgeCards.forEach((card, index) => {
        const titleEl = card.querySelector('.ql-title-medium, .profile-badge__title, h3, .badge-title');
        const dateEl = card.querySelector('.ql-body-medium, .profile-badge__date, .badge-date');
        const imgEl = card.querySelector('img') as HTMLImageElement | null;

        const rawTitle = titleEl?.textContent?.trim() || `Cloud Badge #${index + 1}`;
        const title = rawTitle.slice(0, 150);
        let dateEarned = safeIsoDate();

        if (dateEl && dateEl.textContent) {
          const dateMatch = dateEl.textContent.match(/(?:Earned|Completed)?\s*([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/i);
          if (dateMatch && dateMatch[1]) {
            dateEarned = safeIsoDate(dateMatch[1]);
          }
        }

        const { category, pointsContribution } = categorizeBadge(title);
        const safeId = `scraped-${Date.now()}-${index}`;

        if (!seenTitles.has(title)) {
          seenTitles.add(title);
          badges.push({
            id: safeId,
            name: title,
            category,
            dateEarned,
            imageUrl: sanitizeImageUrl(imgEl?.src),
            pointsContribution,
            isVerified: true,
            season: 'Season 2026'
          });
        }
      });
    }

    if (badges.length > 0) {
      return { name: name.slice(0, 80), badges };
    }
  }

  // 3. Fallback to Plain Text Line-by-Line Scraper
  // This allows the user to simply copy all text from the page (Ctrl+A, Ctrl+C) and paste it!
  const lines = trimmed.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const textBadges: ArcadeBadge[] = [];
  const textSeenTitles = new Set<string>();
  let extractedName = 'Cloud Adventurer';

  // Search for profile name in top 20 lines
  for (let i = 0; i < Math.min(20, lines.length); i++) {
    const line = lines[i];
    if (line.toLowerCase().includes('google cloud skills boost') || line.toLowerCase().includes('public profile')) {
      continue;
    }
    if (line.match(/^Profile of\s+(.+)/i)) {
      extractedName = line.replace(/^Profile of\s+/i, '');
      break;
    }
    // If line looks like a person's name (2-3 words, no numbers, capitalized)
    if (i < 5 && line.length > 3 && line.length < 40 && /^[A-Z][a-zA-Z\s.-]+$/.test(line)) {
      extractedName = line;
      break;
    }
  }

  // Scan for badges: look for "Earned <Date>" or known catalog badge names
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const earnedMatch = line.match(/(?:Earned|Completed)\s+([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/i);

    if (earnedMatch) {
      const dateStr = earnedMatch[1];
      const safeDate = safeIsoDate(dateStr);

      // Candidate title is the preceding non-empty line
      let candidateTitle = '';
      for (let prevIdx = i - 1; prevIdx >= Math.max(0, i - 4); prevIdx--) {
        const prev = lines[prevIdx];
        if (
          prev &&
          !prev.toLowerCase().includes('earned') &&
          !prev.toLowerCase().includes('badge') &&
          !prev.toLowerCase().includes('google cloud') &&
          prev.length > 5
        ) {
          candidateTitle = prev;
          break;
        }
      }

      if (!candidateTitle && i > 0) {
        candidateTitle = lines[i - 1];
      }

      if (candidateTitle && candidateTitle.length > 4 && !textSeenTitles.has(candidateTitle)) {
        textSeenTitles.add(candidateTitle);
        const { category, pointsContribution } = categorizeBadge(candidateTitle);
        textBadges.push({
          id: `text-badge-${Date.now()}-${textBadges.length}`,
          name: candidateTitle.slice(0, 150),
          category,
          dateEarned: safeDate,
          pointsContribution,
          isVerified: true,
          season: 'Season 2026'
        });
      }
    } else {
      // Also check if this line exactly matches an official badge from our catalog!
      for (const repoBadge of REPOSITORY_BADGES) {
        if (line.toLowerCase() === repoBadge.name.toLowerCase() && !textSeenTitles.has(repoBadge.name)) {
          textSeenTitles.add(repoBadge.name);
          // Look ahead 1-2 lines for date
          let foundDate = safeIsoDate();
          if (i + 1 < lines.length) {
            const nextMatch = lines[i + 1].match(/(?:Earned|Completed)\s+([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/i);
            if (nextMatch) foundDate = safeIsoDate(nextMatch[1]);
          }

          textBadges.push({
            id: `catalog-match-${Date.now()}-${textBadges.length}`,
            name: repoBadge.name,
            category: repoBadge.category,
            dateEarned: foundDate,
            pointsContribution: repoBadge.pointsContribution,
            description: repoBadge.description,
            isVerified: true,
            season: 'Season 2026'
          });
          break;
        }
      }
    }
  }

  return {
    name: extractedName.slice(0, 80),
    badges: textBadges
  };
}

// Keep backwards compatibility
export const parseProfileHtml = parseProfileContent;

/**
 * Attempts automated fetch with proxies.
 * Note: Google Cloud Skills Boost employs Cloudflare bot-protection (HTTP 403)
 * against automated fetch requests. If blocked, users can use the instant
 * text/HTML parser or quick badge selector.
 */
export async function fetchProfileWithProxy(url: string): Promise<{ name: string; badges: ArcadeBadge[] }> {
  const cleanUrl = sanitizeUrl(url);
  if (!cleanUrl) {
    throw new Error('Please enter a valid URL (e.g. https://www.cloudskillsboost.google/public_profiles/...)');
  }

  const proxyEndpoints = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(cleanUrl)}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(cleanUrl)}`
  ];

  let lastStatus = 0;

  for (const proxy of proxyEndpoints) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    try {
      const response = await fetch(proxy, {
        signal: controller.signal,
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml'
        }
      });

      clearTimeout(timeoutId);
      lastStatus = response.status;

      if (response.ok) {
        const html = await response.text();
        if (html && html.length > 300) {
          const parsed = parseProfileContent(html);
          if (parsed.badges.length > 0 || (parsed.name && parsed.name !== 'Cloud Adventurer')) {
            return parsed;
          }
        }
      }
    } catch {
      clearTimeout(timeoutId);
    }
  }

  // Provide a friendly, actionable error explaining Google's Cloudflare 403 protection
  throw new Error(
    `Google Cloud Skills Boost uses Cloudflare bot-protection (HTTP 403) that prevents direct automated scraping. Simply copy and paste your profile page text or HTML into the box below!`
  );
}
