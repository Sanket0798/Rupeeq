// Backup script to restore index.html if it gets deleted
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexHtmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Financia - Your Financial Partner</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

const indexPath = path.join(__dirname, 'index.html');

// Check if index.html exists
if (!fs.existsSync(indexPath)) {
  console.log('⚠️  index.html is missing! Restoring...');
  fs.writeFileSync(indexPath, indexHtmlContent, 'utf8');
  console.log('✅ index.html restored successfully!');
} else {
  console.log('✅ index.html exists - no action needed');
}
