"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = __importDefault(require("../controllers/profile.controller"));
const profileRouter = (0, express_1.Router)();
/**
 * @swagger
 * /users/{id}/profile:
 *    post:
 *      tags:
 *        - profile
 *      summary: "Crea y completa el perfil de usuario"
 *      description: Este endpoint es para crear y completar perfil del usuario. En el diseases, cambiar por un array de objetos (de enfermedades), dentro esta el campo name y description
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
profileRouter.post("/users/:idUser/profile", profile_controller_1.default.createProfile);
/**
 * @swagger
 * /users/{id}/profile:
 *    put:
 *      tags:
 *        - profile
 *      summary: "Editar el perfil de usuario"
 *      description: Este endpoint es para aditar perfil del usuario
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
 *          description: Retorna el objeto editado.
 *        '422':
 *          description: Error de validacion.
 */
profileRouter.put("/users/:idUser/profile", profile_controller_1.default.updateProfile);
/**
 * @swagger
 * /users/{id}/profile/desease:
 *    delete:
 *      tags:
 *        - profile
 *      summary: "Eliminar una enfermedad del perfil de usuario"
 *      description: Este endpoint es para eliminar una enfermedad del perfil del usuario
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
 *          description: Retorna el objeto editado.
 *        '422':
 *          description: Error de validacion.
 */
profileRouter.delete("/users/:idUser/profile/desease", profile_controller_1.default.delteDesease);
exports.default = profileRouter;
