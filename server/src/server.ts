import express, { Request, Response } from 'express';
// import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import apiRoutes from './routes/api.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

// const sequelize = new Sequelize(process.env.DB as string)

// const testConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Database connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
// testConnection();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../../client/dist')))
app.use('/api', apiRoutes)

app.get(/(.*)/, (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
})

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

if (process.exitCode === 0) {
  server.close(() => {
    console.log('Server has stopped listening.')
  })
}

