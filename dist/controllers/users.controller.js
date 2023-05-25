"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUser = exports.getUsers = exports.signIn = exports.signUp = void 0;
const UserCapa1_model_1 = __importDefault(require("../models/UserCapa1.model"));
const hadleHtppError_1 = require("../middleware/hadleHtppError");
const handlePassword_1 = require("../middleware/handlePassword");
const UserCapa1_model_2 = __importDefault(require("../models/UserCapa1.model"));
const auth_controller_1 = require("./auth.controller");
const auth_controller_2 = require("./auth.controller");
const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).json({ auth: false, message: 'No token provided.' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
};
const signUp = async (req, res) => {
    const { name, email, password, termsAndConditions, privacyPolicy } = req.body;
    console.log(req.body);
    const passwordHash = await (0, handlePassword_1.encrypt)(req.body.password); //encrypta la password
    console.log(passwordHash, 'passwordHash');
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
        const existingUser = await UserCapa1_model_2.default.findOne({ email });
        console.log(existingUser, 'existingUser');
        if (existingUser) {
            return res
                .status(400)
                .send('Ya existe un usuario con ese email actualiza tu contraseña.');
        }
        const user = new UserCapa1_model_2.default({
            name,
            email,
            password: passwordHash,
            termsAndConditions,
            privacyPolicy,
        });
        console.log(user, 'user');
        await user.save();
        console.log(user, 'user');
        const token = (0, auth_controller_1.createToken)(user);
        console.log(token, 'token');
        user.set('password', undefined, { strict: false }); //No muestre la password al crear
        res.status(200).json({
            auth: true,
            token,
            message: 'Usuario creado con éxito',
            user,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error al crear el usuario');
    }
};
exports.signUp = signUp;
const signIn = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send('El email y la contraseña son requeridos');
    }
    try {
        const findUser = await (0, auth_controller_2.findUserByEmail)(req.body.email);
        const hashPassword = await UserCapa1_model_2.default.findOne({ email: req.body.email });
        if (!hashPassword || !findUser) {
            return res.status(404).send('No user found.');
        }
        const checkPassword = await (0, handlePassword_1.compare)(req.body.password, hashPassword.password);
        findUser.set('password', undefined, { strict: false }); // oculto la password
        if (!checkPassword) {
            (0, hadleHtppError_1.handleHtppError)(res, 'Invalid Password', 401);
            return;
        }
        if (!findUser) {
            return res.status(404).send('No user found.');
        }
        const token = (0, auth_controller_1.createToken)(findUser);
        res.status(200).json({
            auth: true,
            token,
            message: 'Bienvenido a tu cuenta',
            user: findUser,
        });
    }
    catch (error) {
        res.status(500).send('Error al iniciar sesión');
    }
};
exports.signIn = signIn;
const getUsers = async (req, res) => {
    const users = await UserCapa1_model_1.default.find()
        .populate({ path: 'profile' })
        .select('name')
        .select('email')
        .select('profile');
    res.json(users);
};
exports.getUsers = getUsers;
const getUser = async (req, res) => {
    const user = await UserCapa1_model_1.default.findById(req.params.id)
        .populate({ path: 'profile' })
        .select('name')
        .select('email')
        .select('profile');
    res.json(user);
};
exports.getUser = getUser;
const deleteUser = async (req, res) => {
    await UserCapa1_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
};
exports.deleteUser = deleteUser;
