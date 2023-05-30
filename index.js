import express from 'express';
import fs from 'fs';
import path from 'path';
import os from 'os';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const indexHtml = path.join(os.homedir(), 'index.html');
    const packageJson = './package.json';

    const indexHtmlData = await fs.promises.readFile(indexHtml, 'utf8');
    const packageJsonData = await fs.promises.readFile(packageJson, 'utf8');

    res.send(`
      <h1>${indexHtmlData}</h1>
      <h2>Json text:</h2>
      <pre>${packageJsonData}</pre>
    `);
  } catch (err) {
    res.status(500).send('Error reading files');
  }
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});