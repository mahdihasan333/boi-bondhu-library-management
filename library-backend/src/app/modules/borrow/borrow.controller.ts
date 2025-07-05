import { Request, Response } from 'express';
import { Borrow } from './borrow.model';
import { Book } from '../book/book.model';

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const { quantity, dueDate } = req.body;

    const book = await Book.findById(bookId);
    if (!book) {
      res.status(404).json({ success: false, message: 'Book not found' });
      return;
    }

    if (quantity > book.copies) {
      res.status(400).json({ success: false, message: 'Not enough copies' });
      return;
    }

    const borrow = await Borrow.create({ book: bookId, quantity, dueDate });
    book.copies -= quantity;
    book.available = book.copies > 0;
    await book.save();

    res.status(201).json({ success: true, data: borrow });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getBorrowSummary = async (_req: Request, res: Response) => {
  try {
    const summary = await Borrow.aggregate([
      { $group: { _id: '$book', totalQuantity: { $sum: '$quantity' } } },
      {
        $lookup: {
          from: 'books',
          localField: '_id',
          foreignField: '_id',
          as: 'bookDetails',
        },
      },
      { $unwind: '$bookDetails' },
      {
        $project: {
          title: '$bookDetails.title',
          isbn: '$bookDetails.isbn',
          totalQuantity: 1,
        },
      },
    ]);

    res.status(200).json({ success: true, data: summary });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
