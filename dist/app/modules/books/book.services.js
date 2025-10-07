"use strict";
// logic implemenation
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookById = exports.createNewBook = exports.getBooks = void 0;
const book_model_1 = require("./book.model");
const getBooks = async () => {
    const result = await book_model_1.Book.find();
    return result;
};
exports.getBooks = getBooks;
const createNewBook = async (data) => {
    const result = await book_model_1.Book.create(data);
    return result;
};
exports.createNewBook = createNewBook;
const updateBookById = async (id, data) => {
    const result = await book_model_1.Book.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    return result;
};
exports.updateBookById = updateBookById;
