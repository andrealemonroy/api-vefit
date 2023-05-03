"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// import UserCapa1Model ,{ UserI } from "../models/User.model";
const generateToken = (user) => {
    const token = jsonwebtoken_1.default.sign({
        sub: user._id,
        email: user.email,
    }, process.env.JWT_SECRET || "secret-key", {
        expiresIn: "1h",
    });
    return token;
};
exports.generateToken = generateToken;
const encryptPassword = async (password) => {
    const salt = await bcryptjs_1.default.genSalt(10);
    return bcryptjs_1.default.hash(password, salt);
};
exports.encryptPassword = encryptPassword;
