import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/static', express.static('../../client/dist'))
app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});