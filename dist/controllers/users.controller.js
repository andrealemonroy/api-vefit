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
exports.deleteUser = exports.updateDiseases = exports.updateUser = exports.getUser = exports.getUsers = void 0;
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
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; //capturo el id del usuario de la URL
    try {
        const user = yield User_model_1.default.findById(id); // busca si el usuario existe en la base de datos
        if (!user) {
            return res.status(404).send('User not found');
        }
        const userUpdate = yield User_model_1.default.findByIdAndUpdate({ _id: id }, req.body, { new: true }); // busca y actualiza al usuario en la base de datos devuelve el usuario actualizado
        return res.status(200).json(userUpdate);
    }
    catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
});
exports.updateUser = updateUser;
const updateDiseases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; //capturo el id del usuario de la URL
    const { disease } = req.body;
    try {
        const user = yield User_model_1.default.findById({ _id: id });
        const diseasesIndex = user.diseases.indexOf(disease);
        console.log(diseasesIndex);
        if (diseasesIndex === -1) {
            return res.status(404).send('desease not found');
        }
        user.diseases.splice(diseasesIndex, 1); // elimina el indice requerido 
        yield user.save();
        return res.status(200).json(user);
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.updateDiseases = updateDiseases;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield User_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map