import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(".");
const port = Number(process.env.PORT || 8765);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".glb": "model/gltf-binary",
  ".fbx": "application/octet-stream",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
};

createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const requested = normalize(decodeURIComponent(url.pathname)).replace(/^[/\\]+/, "");
  const target = resolve(join(root, requested || "index.html"));

  if (!target.startsWith(root) || !existsSync(target) || !statSync(target).isFile()) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  res.writeHead(200, { "Content-Type": types[extname(target)] || "application/octet-stream" });
  createReadStream(target).pipe(res);
}).listen(port, "127.0.0.1", () => {
  console.log(`http://127.0.0.1:${port}/index.html`);
});
