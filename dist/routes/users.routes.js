"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const userRouter = (0, express_1.Router)(); //UserCapa1
/**
 * @swagger
 * /users:
 *    get:
 *      tags:
 *        - users
 *      summary: "Listar usuarios"
 *      description: Este endpoint es para listar todos los User
 *      responses:
 *        '200':
 *          description: Retorna el objeto editado .
 *        '422':
 *          description: Error de validacion.
 */
userRouter.get('/users', users_controller_1.getUsers);
/**
 * @swagger
 * /users/{id}:
 *    get:
 *      tags:
 *        - users
 *      summary: "Buscar un usuario por ID"
 *      description: Este endpoint es para buscar un usuario
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del User
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      responses:
 *        '200':
 *          description: Retorna el objeto editado.
 *        '422':
 *          description: Error de validacion.
 */
userRouter.get('/users/:id', users_controller_1.getUser);
/**
 * @swagger
 * /users/{id}:
 *    delete:
 *      tags:
 *        - users
 *      summary: "Buscar un usuario por ID"
 *      description: Este endpoint es para eliminar un usuario
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del User
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      responses:
 *        '200':
 *          description: Retorna el objeto editado.
 *        '422':
 *          description: Error de validacion.
 */
userRouter.delete('/users/:id', users_controller_1.deleteUser);
/**
 * @swagger
 * /signIn:
 *    post:
 *      tags:
 *        - users
 *      summary: "Iniciar Sesion"
 *      description: Este endpoint es para Iniciar Sesion
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      responses:
 *        '200':
 *          description: Retorna el objeto editado.
 *        '422':
 *          description: Error de validacion.
 */
userRouter.post('/signIn', users_controller_1.signIn); //iniciar sesion
/**
 * @swagger
 * /signUp:
 *    post:
 *      tags:
 *        - users
 *      summary: "Registrarse"
 *      description: Este endpoint es para Registrarse
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      responses:
 *        '200':
 *          description: Retorna el objeto editado.
 *        '422':
 *          description: Error de validacion.
 */
userRouter.post('/signUp', users_controller_1.signUp); //registrarse
exports.default = userRouter;
//# sourceMappingURL=users.routes.js.map