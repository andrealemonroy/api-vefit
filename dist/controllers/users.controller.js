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
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
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
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new User_model_1.default(req.body);
        yield user.save();
        return res.json(user);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error creating User',
            error,
        });
    }
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_model_1.default.findByIdAndDelete(req.params.id);
    console.log(user);
    return res.json(user);
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    console.log(user);
    return res.json(user);
});
exports.updateUser = updateUser;
//# sourceMappingURL=users.controller.js.map