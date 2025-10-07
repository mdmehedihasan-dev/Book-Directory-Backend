"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggedInUser = exports.registerNewUser = void 0;
const user_model_1 = require("./user.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../config");
const registerNewUser = async (username, email, password) => {
    const existingUser = await user_model_1.User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        throw new Error("User with this email or username already exists.");
    }
    const hasededPassword = await bcryptjs_1.default.hash(password, 10);
    // create new user
    const user = new user_model_1.User({
        username,
        email,
        password: hasededPassword
    });
    await user.save();
    return user;
};
exports.registerNewUser = registerNewUser;
const loggedInUser = async (email, password) => {
    const user = await user_model_1.User.findOne({ email });
    if (!user) {
        throw new Error("Invalid email or password. User not found!");
    }
    // verify password
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }
    const token = jsonwebtoken_1.default.sign({
        userId: user._id,
        role: user.role
    }, config_1.config.jwt_secret, { expiresIn: '1h' });
    return {
        user, token
    };
};
exports.loggedInUser = loggedInUser;
