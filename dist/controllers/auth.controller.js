"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const jwt = require('jsonwebtoken');
const createToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 86400, // 24 hours
    });
};
const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).json({ auth: false, message: 'No token provided.' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
};
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    if (!user) {
        return res.status(404).send('The email doesn\'t exists');
    }
    const token = createToken(user);
    res.status(200).json({ auth: true, token });
});
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const newUser = new User_1.default({ email, password });
    yield newUser.save();
    const token = createToken(newUser);
    res.status(200).json({ auth: true, token });
});
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).send('No user found.');
    }
    res.status(200).json(user);
});
const logout = (req, res) => {
    res.status(200).send({ auth: false, token: null });
};
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findByIdAndUpdate(req.userId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!user) {
        return res.status(404).send('No user found.');
    }
    const token = createToken(user);
    res.status(200).json({ auth: true, token });
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findByIdAndDelete(req.userId);
    if (!user) {
        return res.status(404).send('No user found.');
    }
    res.status(200).json({ auth: false, token: null });
});
exports.default = {
    signIn,
    signUp,
    profile,
    logout,
    updateUser,
    deleteUser,
    verifyToken,
};
//# sourceMappingURL=auth.controller.js.map