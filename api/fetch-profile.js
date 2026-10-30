/**
 * Vercel Serverless Function: /api/fetch-profile
 *
 * Acts as a server-side proxy for fetching Google Skills Boost public profiles.
 * Required because skills.google blocks direct browser CORS requests.
 *
 * Usage: GET /api/fetch-profile?url=https%3A%2F%2Fskills.google%2Fpublic_profiles%2F<UUID>
 */

export const config = {
  maxDuration: 15,
};

export default async function handler(req, res) {
  // CORS headers — allow any frontend origin to call this endpoint
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, HEAD');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Safely extract the target URL from req.query or the request URL
  let targetUrl = req.query?.url;
  if (!targetUrl && req.url) {
    try {
      const parsed = new URL(req.url, 'http://localhost');
      targetUrl = parsed.searchParams.get('url');
    } catch {
      // fallback
    }
  }

  if (!targetUrl) {
    res.status(400).json({ error: 'url query parameter is required' });
    return;
  }

  let normalized = String(targetUrl).trim();

  // Extract UUID if present and build canonical skills.google URL
  const uuidMatch = normalized.match(
    /([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i
  );
  if (uuidMatch) {
    normalized = `https://skills.google/public_profiles/${uuidMatch[1]}`;
  } else {
    if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
      normalized = `https://${normalized}`;
    }
    normalized = normalized
      .replace('www.skills.google', 'skills.google')
      .replace('cloudskillsboost.google', 'skills.google');
  }

  // Safety: only allow Google Skills domains
  let parsed;
  try {
    parsed = new URL(normalized);
  } catch {
    res.status(400).json({ error: 'Invalid URL format' });
    return;
  }

  const allowedHosts = ['skills.google', 'www.skills.google', 'cloudskillsboost.google', 'www.cloudskillsboost.google'];
  if (!allowedHosts.includes(parsed.hostname.toLowerCase())) {
    res.status(403).json({ error: 'Only Google Skills Boost profile URLs are supported.' });
    return;
  }

  try {
    const response = await fetch(normalized, {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Cache-Control': 'no-cache',
      },
      redirect: 'follow',
    });

    if (!response.ok) {
      res.status(response.status).json({
        error: `Google Skills returned status ${response.status}. The profile may be private or not found.`,
      });
      return;
    }

    const html = await response.text();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).json({ error: err.message || 'Failed to fetch profile from Google Skills.' });
  }
}
