import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import path from 'node:path';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/ezrentout/assets', async (req: Request, res: Response) => {
  const { page } = req.query || '1';
  const data = await fetch(`https://stagecorps.ezrentout.com/assets.api?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'token': process.env.EZRENTOUT_TOKEN || ''
    }
  });
  res.json(data);
})

app.get(/(.*)/, (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});