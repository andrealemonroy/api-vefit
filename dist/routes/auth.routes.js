"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const router = (0, express_1.Router)();
router.post('/signup', auth_controller_1.default.signUp);
router.post('/signin', auth_controller_1.default.signIn);
router.get('/profile', auth_controller_1.default.profile);
router.get('/logout', auth_controller_1.default.logout);
router.put('/update', auth_controller_1.default.updateUser);
router.delete('/delete', auth_controller_1.default.deleteUser);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map