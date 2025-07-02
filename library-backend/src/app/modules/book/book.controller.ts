import { Request, Response } from "express";
import { Book } from "./book.model";

// ✅ Create Book
export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Get All Books (Pagination)
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const books = await Book.find().skip(skip).limit(limit);
    const total = await Book.countDocuments();

    res.json({ success: true, total, page, limit, data: books });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Book By ID
export const getBookById = async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ success: false, message: "Book not found" });
  res.json({ success: true, data: book });
};

// ✅ Update Book
export const updateBook = async (req: Request, res: Response) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: book });
};

// ✅ Delete Book
export const deleteBook = async (req: Request, res: Response) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  res.json({ success: true, data: book });
};
