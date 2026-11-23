import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Keep GEMINI_API_KEY only in Node environment during dev server
  process.env.GEMINI_API_KEY = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

  return {
    plugins: [
      react(),
      {
        name: 'local-api-chat-dev-middleware',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', async () => {
                try {
                  req.body = JSON.parse(body || '{}');
                  const { default: handler } = await import('./api/chat.js');
                  const mockRes = {
                    setHeader: (k, v) => res.setHeader(k, v),
                    status: (code) => {
                      res.statusCode = code;
                      return {
                        json: (data) => {
                          res.setHeader('Content-Type', 'application/json');
                          res.end(JSON.stringify(data));
                        },
                        end: () => res.end(),
                      };
                    },
                  };
                  await handler(req, mockRes);
                } catch (err) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Server error' }));
                }
              });
            } else if (req.method === 'OPTIONS') {
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
              res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
              res.statusCode = 200;
              res.end();
            } else {
              res.statusCode = 405;
              res.end('Method Not Allowed');
            }
          });
        },
      },
    ],
    server: {
      port: 3000,
      open: false,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-motion': ['motion'],
            'vendor-icons': ['lucide-react'],
            'vendor-gsap': ['gsap'],
            'vendor-firebase': ['firebase/app', 'firebase/firestore'],
          },
        },
      },
      chunkSizeWarningLimit: 800,
    },
  };
});
