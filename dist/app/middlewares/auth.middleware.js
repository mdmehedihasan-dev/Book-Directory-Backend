"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminOnly = exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const user_model_1 = require("../modules/auth/user.model");
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            res.status(401).json({ message: "Authentication token is required" });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, config_1.config.jwt_secret);
        const user = await user_model_1.User.findById(decoded.userId);
        if (!user) {
            res.status(401).json({ message: "Invalid autheticate token" });
            return;
        }
        req.user = {
            _id: user._id,
            role: user.role
        };
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Authentication failed!' });
    }
};
exports.auth = auth;
const adminOnly = (req, res, next) => {
    if (req.user?.role !== 'admin') {
        res.status(403).json({ message: "Access denied. Admin privileges required." });
    }
    next();
};
exports.adminOnly = adminOnly;
