import express, { Application, Request, Response } from "express";
import { BookRoutes } from "./app/modules/book/book.route";
import { BorrowRoutes } from "./app/modules/borrow/borrow.route";
import cors from "cors";

const app: Application = express();

// ✅ CORS middleware - এইটা উপরে রাখো
app.use(cors({
  origin: ['https://library-frontend-roan.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // ✅ OPTIONS must be added
  credentials: true,
}));

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("📚 Welcome to boi-bondhu-library-management");
});

// ✅ Optional: Handle OPTIONS request globally (for some hosts like Vercel this helps)
app.options("*", cors());

app.use("/books", BookRoutes);
app.use("/borrow", BorrowRoutes);

export default app;
