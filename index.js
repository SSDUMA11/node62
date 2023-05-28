import express from 'express';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const indexHtml = 'C:\\Users\\User\\index.html';
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