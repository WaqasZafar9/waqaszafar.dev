import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const indexPath = path.join(distDir, "index.html");
const PORT = 4173;

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const urlPath = req.url.split("?")[0];
      let filePath = path.join(distDir, decodeURIComponent(urlPath));

      if (!existsSync(filePath) || urlPath === "/") {
        filePath = indexPath;
      }

      try {
        const data = await readFile(filePath);
        const ext = path.extname(filePath);
        res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });

    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  if (!existsSync(indexPath)) {
    console.error("dist/index.html not found — run `vite build` first.");
    process.exit(1);
  }

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle0", timeout: 30000 });

    // Give React's lazy-loaded sections a moment to finish mounting after
    // their chunks resolve, so the snapshot includes every section's text.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const html = await page.content();
    await writeFile(indexPath, `<!doctype html>\n${html}`);
    console.log("Prerendered dist/index.html with fully-rendered content.");
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((error) => {
  console.error("Prerender failed:", error);
  process.exit(1);
});
