"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const book_routes_1 = require("./app/modules/books/book.routes");
const user_routes_1 = require("./app/modules/auth/user.routes");
const errorHandler_1 = __importDefault(require("./app/middlewares/errorHandler"));
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
app.use("/api/books", book_routes_1.BookRoutes);
app.use("/api/users", user_routes_1.UserRoutes);
// error handler
app.use(errorHandler_1.default);
app.get('/', (req, res) => {
    res.send('Book Directory Server is running....!');
});
exports.default = app;
