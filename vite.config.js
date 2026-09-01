import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    tailwindcss(),
    {
      name: 'contact-api-dev-middleware',
      configureServer(server) {
        server.middlewares.use('/api/health', (_req, res) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ status: 'ok' }));
        });
        server.middlewares.use('/api/contact', async (req, res) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', async () => {
              try {
                const parsed = JSON.parse(body || '{}');
                const { sendContactEmail } = await import('./shared/contactMailer.js');
                const result = await sendContactEmail(parsed);
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = result.statusCode;
                res.end(JSON.stringify({ message: result.message }));
              } catch (err) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 500;
                res.end(
                  JSON.stringify({
                    message: err.message || 'Failed to send message',
                  })
                );
              }
            });
          } else {
            res.statusCode = 405;
            res.end('Method Not Allowed');
          }
        });
      },
    },
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
})

