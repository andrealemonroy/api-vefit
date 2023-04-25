import { Router } from "express";
import { getUser, getUsers,  deleteUser, signUp, signIn} from "../controllers/users.controller";
const userRouter = Router();//UserCapa1


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
userRouter.get('/users', getUsers);

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
userRouter.get('/users/:id', getUser);

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
userRouter.delete('/users/:id',deleteUser);

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
userRouter.post('/signIn', signIn);//iniciar sesion

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
userRouter.post('/signUp', signUp);//registrarse

export default userRouter;
