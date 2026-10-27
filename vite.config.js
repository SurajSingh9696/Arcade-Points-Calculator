import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

async function handleProfileProxy(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, HEAD');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  try {
    const reqUrl = new URL(req.url, 'http://localhost:5173');
    const target = reqUrl.searchParams.get('url');

    if (!target) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'URL parameter is required' }));
      return;
    }

    let normalized = target.trim();
    if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
      normalized = `https://${normalized}`;
    }

    // Extract UUID if passed in
    const uuidMatch = normalized.match(/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i);
    if (uuidMatch) {
      normalized = `https://skills.google/public_profiles/${uuidMatch[1]}`;
    } else {
      if (normalized.includes('cloudskillsboost.google')) {
        normalized = normalized.replace('cloudskillsboost.google', 'skills.google');
      }
      if (normalized.includes('www.skills.google')) {
        normalized = normalized.replace('www.skills.google', 'skills.google');
      }
    }

    console.log(`[Proxy] Fetching profile: ${normalized}`);

    const response = await fetch(normalized, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none'
      },
      redirect: 'follow'
    });

    if (!response.ok) {
      res.statusCode = response.status;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: `Skills Google returned status ${response.status}` }));
      return;
    }

    const html = await response.text();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.end(html);
  } catch (err) {
    console.error('[Proxy Error]:', err.message);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message || 'Internal proxy error' }));
  }
}

const proxyMiddleware = (req, res, next) => {
  if (req.url && req.url.startsWith('/api/fetch-profile')) {
    handleProfileProxy(req, res).catch(next);
    return;
  }
  next();
};

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'profile-proxy-middleware',
      configureServer(server) {
        server.middlewares.use(proxyMiddleware);
      },
      configurePreviewServer(server) {
        server.middlewares.use(proxyMiddleware);
      }
    }
  ],
  server: {
    port: 5173,
    host: true,
    cors: true
  },
  preview: {
    port: 4173,
    host: true,
    cors: true
  }
});
