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
exports.deleteUser = exports.register = exports.getUser = exports.getUsers = void 0;
const User_model_1 = __importDefault(require("../models/User.model"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_model_1.default.find();
    res.json(users);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_model_1.default.findById(req.params.id);
    res.json(user);
});
exports.getUser = getUser;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const validator = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    try {
        if (validator.test(email)) {
            const eMailVerification = yield User_model_1.default.findOne({ email });
            if (eMailVerification) {
                return res.status(400).send('El correo electrónico ya está en uso.');
            }
            const users = yield User_model_1.default.create({ name, email, password });
            return res.status(201).json(users);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error al Registarse');
    }
    res.status(400).send('no es un email valido');
});
exports.register = register;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield User_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map