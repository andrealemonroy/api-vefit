"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = __importDefault(require("../controllers/profile.controller"));
const profileRouter = (0, express_1.Router)();
profileRouter.post("/users/:idUser/profile", profile_controller_1.default.createProfile);
exports.default = profileRouter;
//# sourceMappingURL=profile.routes.js.map