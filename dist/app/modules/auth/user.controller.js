"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const user_services_1 = require("./user.services");
const registerUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({ message: "All fields are required" });
        }
        const user = await (0, user_services_1.registerNewUser)(username, email, password);
        res.status(201).json({
            message: "User registered successfully!",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    }
    catch (error) {
        next(error);
    }
};
exports.registerUser = registerUser;
// user login
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "Email and password are required." });
            return;
        }
        const { user, token } = await (0, user_services_1.loggedInUser)(email, password);
        res.status(201).json({
            message: "User login successfully done!",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            },
            token
        });
    }
    catch (error) {
        next(error);
    }
};
exports.loginUser = loginUser;
