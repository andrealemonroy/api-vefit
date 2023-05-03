import { Router } from "express";
import profileController from "../controllers/profile.controller";
const profileRouter = Router();
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
profileRouter.post("/users/:idUser/profile", profileController.createProfile);
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
profileRouter.put("/users/:idUser/profile", profileController.updateProfile);
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
profileRouter.delete("/users/:idUser/profile/desease", profileController.delteDesease);
export default profileRouter;
//# sourceMappingURL=profile.routes.js.map