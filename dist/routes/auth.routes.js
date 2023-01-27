"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const authRouter = (0, express_1.Router)();
authRouter.post('/signup', auth_controller_1.default.signUp);
authRouter.post('/signin', auth_controller_1.default.signIn);
authRouter.get('/profile', auth_controller_1.default.profile);
authRouter.get('/logout', auth_controller_1.default.logout);
authRouter.put('/update', auth_controller_1.default.updateUser);
authRouter.delete('/delete', auth_controller_1.default.deleteUser);
exports.default = authRouter;
//# sourceMappingURL=auth.routes.js.map