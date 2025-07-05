import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BookRoutes } from './app/modules/book/book.route';
import { BorrowRoutes } from './app/modules/borrow/borrow.route';


const app: Application = express();

app.use(
  cors({
    origin: [
      'https://library-frontend-roan.vercel.app',
      'http://localhost:5173',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

app.use(express.json());
app.options('*', cors());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: '📚 Welcome to boi-bondhu-library-management',
    data: null,
  });
});

app.use('/api/books', BookRoutes);
app.use('/api/borrow', BorrowRoutes);

export default app;