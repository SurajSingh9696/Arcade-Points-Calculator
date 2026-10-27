import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

async function handleProfileProxy(req, res) {
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

    // Standardize to www.skills.google
    if (normalized.includes('cloudskillsboost.google')) {
      normalized = normalized.replace('cloudskillsboost.google', 'skills.google');
    }
    if (normalized.includes('skills.google') && !normalized.includes('www.skills.google')) {
      normalized = normalized.replace('skills.google', 'www.skills.google');
    }

    // Extract UUID if passed in
    const uuidMatch = normalized.match(/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i);
    if (uuidMatch) {
      normalized = `https://www.skills.google/public_profiles/${uuidMatch[1]}`;
    }

    const response = await fetch(normalized, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.statusCode = 200;
    res.end(html);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message || 'Internal proxy error' }));
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'profile-proxy-middleware',
      configureServer(server) {
        server.middlewares.use('/api/fetch-profile', handleProfileProxy);
      },
      configurePreviewServer(server) {
        server.middlewares.use('/api/fetch-profile', handleProfileProxy);
      }
    }
  ],
  server: {
    port: 5173,
    host: true
  }
});
