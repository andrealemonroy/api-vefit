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
const SignUpUser_model_1 = __importDefault(require("../models/SignUpUser.model"));
const User_model_1 = __importDefault(require("../models/User.model"));
const hadleHtppError_1 = require("../utils/hadleHtppError");
const handlePassword_1 = require("../utils/handlePassword");
const jwt = require('jsonwebtoken');
const createToken = (user) => {
    console.log("createToken", process.env.JWT_SECRET);
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 1000, // 24 hours
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
const findAdminByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield SignUpUser_model_1.default.findOne({ email });
});
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_model_1.default.findOne({ email: email });
});
const adminSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send('El email y la contraseña son requeridos');
    }
    try {
        console.log(req.body.email);
        const findUser = yield findAdminByEmail(req.body.email);
        if (!findUser) {
            return res.status(404).send('No user found.');
        }
        if ((findUser === null || findUser === void 0 ? void 0 : findUser.password) !== req.body.password) {
            return res
                .status(401)
                .json({ auth: false, token: null, message: 'Contraseña incorrecta' });
        }
        const token = createToken(findUser);
        res.status(200).json({
            auth: true,
            token,
            message: 'Bienvenido a tu cuenta',
            user: findUser,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error al iniciar sesión');
    }
});
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, "mensaje");
    if (!req.body.email || !req.body.password) {
        return res.status(400).send('El email y la contraseña son requeridos');
    }
    try {
        const findUser = yield findUserByEmail(req.body.email);
        console.log(findUser);
        const hashPassword = yield User_model_1.default.findOne({ email: String }).select("password");
        console.log(findUser, 'findUser');
        const checkPassword = yield (0, handlePassword_1.compare)(req.body.password, hashPassword.password);
        findUser.set("password", undefined, { strict: false }); // oculto la password
        console.log(findUser.password, "escondela");
        if (!checkPassword) {
            (0, hadleHtppError_1.handleHtppError)(res, "Invalid Password", 401);
            return;
        }
        if (!findUser) {
            return res.status(404).send('No user found.');
        }
        console.log(findUser === null || findUser === void 0 ? void 0 : findUser.password, req.body.password);
        if ((findUser === null || findUser === void 0 ? void 0 : findUser.password) != req.body.password) {
            return res
                .status(401)
                .json({ auth: false, token: null, message: 'Contraseña incorrecta' });
        }
        const token = createToken(findUser);
        res.status(200).json({
            auth: true,
            token,
            message: 'Bienvenido a tu cuenta',
            user: findUser,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error al iniciar sesión');
    }
});
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, birthday, weight, height, diseases, termsAndConditions, privacyPolicy } = req.body;
    const passwordHash = yield (0, handlePassword_1.encrypt)(req.body.password); //encrypta la password
    if (!name) {
        return res.status(400).send('El nombre es requerido');
    }
    if (!email) {
        return res.status(400).send('El email es requerido');
    }
    if (!password) {
        return res.status(400).send('La contraseña es requerida');
    }
    try {
        const existingUser = yield User_model_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).send('Ya existe un usuario con ese email');
        }
        console.log(req.body);
        const user = new User_model_1.default({
            name,
            email,
            password: passwordHash,
            birthday,
            weight,
            height,
            diseases,
            termsAndConditions,
            privacyPolicy,
        });
        yield user.save();
        const token = createToken(user);
        console.log(token);
        user.set("password", undefined, { strict: false }); //No muestre la password al crear
        res
            .status(200)
            .json({ auth: true, token, message: 'Usuario creado con éxito', user });
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error al crear el usuario');
    }
});
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const user = yield SignUpUser_model_1.default.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).send('No user found.');
    }
    res.status(200).json(user);
});
const logout = (req, res) => {
    res.status(200).send({ auth: false, token: null });
};
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('userID', req.params.id);
    const user = yield User_model_1.default.findById(req.params.id);
    console.log(user, 'user');
    if (!user) {
        return res.status(404).send('No user found.');
    }
    const token = createToken(user);
    res.status(200).json({ auth: true, token });
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_model_1.default.findByIdAndDelete(req.userId);
    if (!user) {
        return res.status(404).send('No user found.');
    }
    res.status(200).json({ auth: false, token: null });
});
const me = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = yield User_model_1.default.findById(decoded.id);
    res.json(user);
});
exports.default = {
    adminSignIn,
    signIn,
    signUp,
    profile,
    logout,
    updateUser,
    deleteUser,
    verifyToken,
    me
};
//# sourceMappingURL=auth.controller.js.map