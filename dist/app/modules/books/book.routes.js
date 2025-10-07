"use strict";
// express js routing
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = express_1.default.Router();
// public routes
router.get("/", book_controller_1.getAllBooks);
router.get("/:id", auth_middleware_1.auth, book_controller_1.getSingleBook);
// admin only routes
router.post("/", auth_middleware_1.auth, auth_middleware_1.adminOnly, book_controller_1.createBook);
router.put("/:id", auth_middleware_1.auth, auth_middleware_1.adminOnly, book_controller_1.updateBook);
router.delete("/:id", auth_middleware_1.auth, auth_middleware_1.adminOnly, book_controller_1.deleteBook);
exports.BookRoutes = router;
