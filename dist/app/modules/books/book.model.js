"use strict";
// for mongoose model
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    publicationYear: {
        type: Number,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    isAvailable: Boolean,
}, {
    timestamps: true
});
exports.Book = (0, mongoose_1.model)("Book", bookSchema);
