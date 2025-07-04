import express, { Application, Request, Response } from "express";
import { BookRoutes } from "./app/modules/book/book.route";
import { BorrowRoutes } from "./app/modules/borrow/borrow.route";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://library-backend-rho.vercel.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.get("/", (_req: Request, res: Response) => {
  res.send("📚 Welcome to boi-bondhu-library-management");
});

app.use("/books", BookRoutes);
app.use("/borrow", BorrowRoutes);

export default app;
