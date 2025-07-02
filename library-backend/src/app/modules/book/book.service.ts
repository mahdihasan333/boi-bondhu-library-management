import { Book } from "./book.model";

export const createBook = async (data: any) => {
  const newBook = await Book.create(data);
  return newBook;
};

export const getAllBooks = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const books = await Book.find().skip(skip).limit(limit);
  const total = await Book.countDocuments();
  return { total, page, limit, books };
};

export const getBookById = async (id: string) => {
  return await Book.findById(id);
};

export const updateBook = async (id: string, data: any) => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBook = async (id: string) => {
  return await Book.findByIdAndDelete(id);
};
