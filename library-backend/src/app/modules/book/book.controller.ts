import { Request, Response } from 'express';
import { Book } from './book.model';


// Create Book
export const createBook = async (req: Request, res: Response) => {
  try {
    const book = new Book({ ...req.body });
    await book.save();
    res.status(201).json({ success: true, data: book });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get All Books (with filter, pagination, sorting)
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const { filter, sortBy = 'createdAt', sort = 'desc', limit = '10', page = '1' } = req.query;

    const query: Record<string, any> = {};
    if (filter) query.genre = filter;

    const sortField = sortBy as string;
    const sortOrder = sort === 'desc' ? -1 : 1;
    const limitNum = parseInt(limit as string);
    const pageNum = parseInt(page as string);
    const skip = (pageNum - 1) * limitNum;

    const [books, total] = await Promise.all([
      Book.find(query).sort({ [sortField]: sortOrder }).skip(skip).limit(limitNum),
      Book.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      data: books,
      meta: { page: pageNum, limit: limitNum, total },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Single Book by ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ success: false, message: 'Book not found' });
      return;
    }
    res.status(200).json({ success: true, data: book });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Book by ID
export const updateBook = async (req: Request, res: Response) => {
  try {
    const updatedData = { ...req.body, available: req.body.copies > 0 };
    const book = await Book.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!book) {
      res.status(404).json({ success: false, message: 'Book not found' });
      return;
    }
    res.status(200).json({ success: true, data: book });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete Book by ID
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      res.status(404).json({ success: false, message: 'Book not found' });
      return;
    }
    res.status(200).json({ success: true, data: book });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
