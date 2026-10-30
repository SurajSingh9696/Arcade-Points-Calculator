import { ArcadeBadge, BadgeCategory } from '../types/arcade';

/**
 * Validates and sanitizes a URL. Only allows http: and https: protocols.
 */
export function sanitizeUrl(input?: string | null): string {
  if (!input) return '';
  try {
    let clean = input.trim();
    if (!clean) return '';
    if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
      clean = `https://${clean}`;
    }
    const parsed = new URL(clean);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return '';
    }
    return parsed.toString();
  } catch {
    return '';
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
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
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
  if (
    lower.includes('level ') ||
    lower.includes('diabolical') ||
    lower.includes('arcade game') ||
    lower.includes('arcade challenge') ||
    lower.includes('arcade voyage') ||
    lower.includes('arcade adventure') ||
    lower.includes('arcade trail')
  ) {
    return { category: 'game', pointsContribution: 1 };
  }
  if (lower.includes('milestone')) {
    if (lower.includes('tier 3') || lower.includes('24')) return { category: 'milestone', pointsContribution: 6 };
    if (lower.includes('tier 2') || lower.includes('16')) return { category: 'milestone', pointsContribution: 4 };
    return { category: 'milestone', pointsContribution: 2 };
  }
  if (
    lower.includes('certification') ||
    lower.includes('hackathon') ||
    lower.includes('cloud hero') ||
    lower.includes('special')
  ) {
    return { category: 'special', pointsContribution: 2 };
  }

  // Default to skill badge (contributes 0.5 to pool: 1 pt per 2 skill badges)
  return { category: 'skill', pointsContribution: 0.5 };
}

/**
 * Extracts Name and Badges from Google Skills profile HTML
 */
export function parseProfileContent(rawHtml: string): { name: string; badges: ArcadeBadge[] } {
  if (!rawHtml || typeof rawHtml !== 'string') {
    return { name: 'Google Cloud Champion', badges: [] };
  }

  let cleanHtml = rawHtml;
  if (cleanHtml.trim().startsWith('{') && cleanHtml.includes('"contents"')) {
    try {
      const parsedJson = JSON.parse(cleanHtml);
      if (typeof parsedJson.contents === 'string') {
        cleanHtml = parsedJson.contents;
      }
    } catch {
      // Keep as-is if JSON parse fails
    }
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanHtml, 'text/html');

  // Extract Profile Name (From Title tag "User Name | Google Skills" or H1)
  let name = '';
  const titleTag = doc.querySelector('title')?.textContent?.trim();
  if (titleTag && titleTag.includes('|')) {
    name = titleTag.split('|')[0].trim();
  }

  if (!name) {
    const h1 = doc.querySelector('h1.ql-headline-medium, h1.ql-title-large, h1, .profile-name');
    if (h1 && h1.textContent?.trim()) {
      name = h1.textContent.trim().replace(/^Profile of\s+/i, '');
    }
  }

  if (!name || name === 'Google Skills' || name === 'Google Cloud Skills Boost') {
    name = 'Google Cloud Champion';
  }

  const badges: ArcadeBadge[] = [];
  const seenTitles = new Set<string>();

  // Pass 1: Cloud Skills profile badge card elements: .profile-badge, .profile-badges-item
  const badgeCards = doc.querySelectorAll('.profile-badge, .profile-badges-item, .public-profile-badge, [class*="profile-badge"]');

  if (badgeCards.length > 0) {
    badgeCards.forEach((card, index) => {
      const titleEl = card.querySelector('.ql-title-medium, .profile-badge__title, h3, .badge-title');
      const dateEl = card.querySelector('.ql-body-medium, .profile-badge__date, .badge-date');
      const imgEl = card.querySelector('img') as HTMLImageElement | null;

      const rawTitle = titleEl?.textContent?.trim();
      if (!rawTitle) return;

      const title = rawTitle.slice(0, 150);
      let dateEarned = safeIsoDate();

      if (dateEl && dateEl.textContent) {
        const dateMatch = dateEl.textContent.match(/(?:Earned|Completed)?\s*([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/i);
        if (dateMatch && dateMatch[1]) {
          dateEarned = safeIsoDate(dateMatch[1]);
        }
      }

      const { category, pointsContribution } = categorizeBadge(title);
      const safeId = `badge-${Date.now()}-${index}`;

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

  // Pass 2: Search for all .ql-title-medium elements in document if Pass 1 yielded 0
  if (badges.length === 0) {
    const titleElements = doc.querySelectorAll('.ql-title-medium, [class*="ql-title-medium"]');
    titleElements.forEach((el, index) => {
      const rawTitle = el.textContent?.trim();
      if (!rawTitle || rawTitle.length < 3) return;

      const lower = rawTitle.toLowerCase();
      if (
        lower === 'badges' ||
        lower === 'public profile' ||
        lower === 'skills boost' ||
        lower === 'google cloud'
      ) {
        return;
      }

      const parent = el.closest('div') || el.parentElement;
      const dateEl = parent?.querySelector('.ql-body-medium, [class*="ql-body-medium"]');
      const imgEl = parent?.querySelector('img') as HTMLImageElement | null;

      let dateEarned = safeIsoDate();
      if (dateEl && dateEl.textContent) {
        const dateMatch = dateEl.textContent.match(/(?:Earned|Completed)?\s*([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/i);
        if (dateMatch && dateMatch[1]) {
          dateEarned = safeIsoDate(dateMatch[1]);
        }
      }

      const { category, pointsContribution } = categorizeBadge(rawTitle);
      if (!seenTitles.has(rawTitle)) {
        seenTitles.add(rawTitle);
        badges.push({
          id: `badge-dom-${Date.now()}-${index}`,
          name: rawTitle,
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

  // Pass 3: Text & Regex scan fallback over raw HTML
  if (badges.length === 0) {
    const titleRegex = /<span class=['"][^'"]*ql-title-medium[^'"]*['"]>\s*([^<]+)\s*<\/span>/gi;
    const dateRegex = /<span class=['"][^'"]*ql-body-medium[^'"]*['"]>\s*(?:Earned|Completed)?\s*([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/gi;

    const titles: string[] = [];
    const dates: string[] = [];

    let tm;
    while ((tm = titleRegex.exec(cleanHtml)) !== null) {
      if (tm[1] && tm[1].trim()) titles.push(tm[1].trim());
    }

    let dm;
    while ((dm = dateRegex.exec(cleanHtml)) !== null) {
      if (dm[1] && dm[1].trim()) dates.push(dm[1].trim());
    }

    titles.forEach((t, i) => {
      if (!seenTitles.has(t)) {
        seenTitles.add(t);
        const { category, pointsContribution } = categorizeBadge(t);
        badges.push({
          id: `regex-badge-${Date.now()}-${i}`,
          name: t,
          category,
          dateEarned: safeIsoDate(dates[i]),
          pointsContribution,
          isVerified: true,
          season: 'Season 2026'
        });
      }
    });
  }

  return {
    name: name.slice(0, 80),
    badges
  };
}

export const parseProfileHtml = parseProfileContent;

/**
 * Fetches Google Cloud / Skills Boost profile using the profile URL only!
 * 1. Checks local dev/preview/standalone proxy endpoints (/api/fetch-profile)
 * 2. Connects directly to Google Skills Boost with native headers
 * 3. Gracefully provides verified data for known user profiles if server is not responding
 */
export async function fetchProfileWithProxy(url: string): Promise<{ name: string; badges: ArcadeBadge[] }> {
  let cleanUrl = url.trim();
  if (!cleanUrl) {
    throw new Error('Please enter a Google Cloud Skills Boost profile URL.');
  }

  // If user only enters a UUID (e.g. 69111a60-5678-4496-baa5-e88ce1a239d6)
  const uuidMatch = cleanUrl.match(/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i);
  if (uuidMatch && !cleanUrl.includes('http')) {
    cleanUrl = `https://skills.google/public_profiles/${uuidMatch[1]}`;
  } else if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    cleanUrl = `https://${cleanUrl}`;
  }

  // Standardize domain to skills.google (without www.)
  if (cleanUrl.includes('cloudskillsboost.google')) {
    cleanUrl = cleanUrl.replace('cloudskillsboost.google', 'skills.google');
  }
  if (cleanUrl.includes('www.skills.google')) {
    cleanUrl = cleanUrl.replace('www.skills.google', 'skills.google');
  }

  // Only use the relative /api/fetch-profile endpoint.
  // This works when served by either `pnpm run dev` (Vite middleware) or `node server.js` (standalone).
  // Never use absolute localhost URLs — they trigger Windows Firewall permission prompts.
  const targetEncoded = encodeURIComponent(cleanUrl);
  const endpoint = `/api/fetch-profile?url=${targetEncoded}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const response = await fetch(endpoint, {
      signal: controller.signal,
      headers: { 'Accept': 'text/html,application/xhtml+xml,application/xml' }
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const html = await response.text();
      if (html && html.length > 500) {
        const parsed = parseProfileContent(html);
        if (parsed.badges.length > 0) {
          return parsed;
        }
        throw new Error(
          'Profile page was loaded, but no badges were detected. Please ensure your Google Cloud Skills Boost profile is set to "Public" and has completed badges.'
        );
      }
    }

    // Try reading JSON error from backend proxy
    let backendError = '';
    try {
      const errJson = await response.json();
      if (errJson && errJson.error) {
        backendError = errJson.error;
      }
    } catch {
      // not JSON
    }

    if (backendError) {
      throw new Error(backendError);
    }

    if (response.status === 404) {
      const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
      if (isLocal) {
        throw new Error('Local server is not running. Please run "node server.js" in the project directory.');
      }
      throw new Error('Server proxy not found (404). Please verify that the API functions were deployed.');
    }

    throw new Error(
      `Could not load profile (HTTP ${response.status}). Please check your URL and ensure the profile is set to Public.`
    );
  } catch (err: any) {
    if (err?.message && !err.message.includes('Failed to fetch') && !err.message.includes('NetworkError')) {
      throw err;
    }
    const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    if (isLocal) {
      throw new Error('Could not connect to the local server. Please run "node server.js" in the terminal.');
    }
    throw new Error('Network connection error while contacting profile proxy. Please check your internet connection.');
  }
}
