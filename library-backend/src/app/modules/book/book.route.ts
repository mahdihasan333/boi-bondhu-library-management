import express from 'express';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from './book.controller';

const router = express.Router();

router.route('/').post(createBook).get(getAllBooks);
router.route('/:id').get(getBookById).patch(updateBook).delete(deleteBook);

export const BookRoutes = router;