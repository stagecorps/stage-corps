import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
// import apiRoutes from './routes/api.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, '../../client/dist')))
app.use(express.urlencoded({ extended: true }))
// app.use('/api', apiRoutes)

app.get(/(.*)/, (_req: Request, res: Response)=>{
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});