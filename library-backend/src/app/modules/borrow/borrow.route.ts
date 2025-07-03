import express from "express";
import {
  borrowBook,
  getBorrowSummary,
} from "./borrow.controller";

const router = express.Router();

router.post("/:bookId", borrowBook);
router.get("/summary/all", getBorrowSummary);

export const BorrowRoutes = router;
