import express, { Application, Request, Response } from "express";
import { BookRoutes } from "./app/modules/book/book.route";
import { BorrowRoutes } from "./app/modules/borrow/borrow.route";


const app: Application = express();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("📚 Welcome to boi-bondhu-library-management");
});

app.use("/books", BookRoutes);
app.use("/borrow", BorrowRoutes);

export default app;
