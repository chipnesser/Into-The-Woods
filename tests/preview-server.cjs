// Local-only fixture routes select the comparison trails without changing the app's random picker.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const examples = {
  MAD: 'madisonQuickTrails[0]',
  BEA: 'beaconTrails.find(trail => trail.name === "Madam Brett Park")',
  NED: 'nederlandTrails.find(trail => trail.name === "Caribou Ranch Open Space")'
};
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const example = examples[url.searchParams.get('example')] ? url.searchParams.get('example') : null;
  const files = { '/': ['index.html', 'text/html'], '/index.html': ['index.html', 'text/html'],
    '/script.js': ['script.js', 'text/javascript'], '/styles.css': ['styles.css', 'text/css'] };
  if (!files[url.pathname]) { res.writeHead(404); return res.end(); }
  const [file, type] = files[url.pathname];
  let content = fs.readFileSync(path.join(root, file), 'utf8');
  if (file === 'index.html' && example) {
    content = content.replace('src="script.js"', `src="script.js?example=${example}"`);
  }
  if (file === 'script.js' && example) {
    content += `\nswitchLocation("${example}"); renderTrail(${examples[example]}, "quick");\n`;
  }
  res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(content);
}).listen(4173, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:4173/?example=MAD (also BEA, NED)'));
