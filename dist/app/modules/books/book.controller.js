"use strict";
// business logic
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getSingleBook = exports.getAllBooks = void 0;
const book_model_1 = require("./book.model");
const book_services_1 = require("./book.services");
// get all books
const getAllBooks = async (req, res, next) => {
    try {
        const books = await (0, book_services_1.getBooks)();
        res.status(200).json(books);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllBooks = getAllBooks;
// get single book by id
const getSingleBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await book_model_1.Book.findById(id);
        if (!book) {
            res.status(404).json({ message: "Book Not Found" });
            return;
        }
        res.status(200).json(book);
    }
    catch (error) {
        next(error);
    }
};
exports.getSingleBook = getSingleBook;
// create new book
const createBook = async (req, res, next) => {
    try {
        const bookData = req.body;
        const book = await (0, book_services_1.createNewBook)(bookData);
        res.status(200).json({ message: "Book created successfull!", book });
    }
    catch (error) {
        next(error);
    }
};
exports.createBook = createBook;
// update book info
const updateBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;
        const bookData = req.body;
        const updatedBook = await (0, book_services_1.updateBookById)(bookId, bookData);
        if (!exports.updateBook) {
            res.status(404).json({ message: "Book can't able to update" });
            return;
        }
        res.status(200).json({ message: "Book updated successfully!", updatedBook });
    }
    catch (error) {
        next(error);
    }
};
exports.updateBook = updateBook;
// delete book by id
const deleteBook = async (req, res, next) => {
    try {
        const book = await book_model_1.Book.findByIdAndDelete(req.params.id);
        if (!book) {
            res.status(404).json({ message: "Book Not Found" });
            return;
        }
        res.status(200).json({ message: "Book deleted successfully done!" });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteBook = deleteBook;
