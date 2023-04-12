"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const ensureAuthenticate_1 = require("../middleware/ensureAuthenticate");
const authRouter = (0, express_1.Router)();
authRouter.get("/login", auth_controller_1.default.login);
authRouter.get("/callback", auth_controller_1.default.callback);
// authRouter.post("/signup", authController.signUp);
// authRouter.post("/signin", authController.adminSignIn);
authRouter.get("/profile", ensureAuthenticate_1.ensureAuthenticated, auth_controller_1.default.profile);
authRouter.get('/logout', auth_controller_1.default.logout);
authRouter.put("/update/:id", auth_controller_1.default.updateUser);
authRouter.delete("/delete", auth_controller_1.default.deleteUser);
authRouter.post("/me", auth_controller_1.default.me);
authRouter.get("/", (_req, res) => {
    res.json({ msj: "" });
});
exports.default = authRouter;
//# sourceMappingURL=auth.routes.js.map