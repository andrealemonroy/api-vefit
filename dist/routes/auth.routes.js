"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const ensureAuthenticate_1 = require("../middleware/ensureAuthenticate");
const authRouter = (0, express_1.Router)(); //signUPUser
/**
 * @swagger
 * /users/{id}/profile:
 *    post:
 *      tags:
 *        - profile
 *      summary: "Crea y completa el perfil de usuario"
 *      description: Este endpoint es para
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del User
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/profile"
 *      responses:
 *        '200':
 *          description: Retorna el objeto del user con el perfil intedrado.
 *        '422':
 *          description: Error de validacion.
 */
authRouter.get("/login", auth_controller_1.default.login);
authRouter.get("/callback", auth_controller_1.default.callback);
authRouter.get("/profileTem", ensureAuthenticate_1.ensureAuthenticated, auth_controller_1.default.profile);
authRouter.get("/logout", auth_controller_1.default.logout);
authRouter.post("/me", auth_controller_1.default.me);
authRouter.get("/", (_req, res) => {
    res.json({ msj: "" });
});
exports.default = authRouter;
