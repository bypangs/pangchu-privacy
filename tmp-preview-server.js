const fs = require('fs');
const path = require('path');
const http = require('http');

const root = process.cwd();
const port = 4173;
const mime = {
  '.html':'text/html; charset=utf-8',
  '.css':'text/css',
  '.js':'application/javascript',
  '.json':'application/json',
  '.png':'image/png',
  '.jpg':'image/jpeg',
  '.jpeg':'image/jpeg',
  '.gif':'image/gif',
  '.svg':'image/svg+xml',
  '.webp':'image/webp',
  '.ico':'image/x-icon',
  '.txt':'text/plain'
};

function setType(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
}

http.createServer((req, res) => {
  const relUrl = new URL(req.url || '/', 'http://localhost').pathname;
  const rel = decodeURIComponent(relUrl).replace(/^\/+/, '');
  const target = path.join(root, rel || 'index.html');
  const normalizedRoot = path.resolve(root) + path.sep;

  if (!path.resolve(target).startsWith(normalizedRoot)) {
    res.statusCode = 403;
    return res.end('Forbidden');
  }

  fs.stat(target, (err, st) => {
    if (err) {
      res.statusCode = 404;
      return res.end('Not Found');
    }
    const file = st.isDirectory() ? path.join(target, 'index.html') : target;
    fs.readFile(file, (e, data) => {
      if (e) {
        res.statusCode = 404;
        return res.end('Not Found');
      }
      setType(res, file);
      res.statusCode = 200;
      res.end(data);
    });
  });
}).listen(port, '127.0.0.1', () => {
  console.log('served at http://localhost:' + port);
});
