import { Router } from "express";
import * as Webinars from "../controllers/webinars.controller";
const webinarRouter = Router();
/**
* @swagger
* /webinar:
*    get:
*      tags:
*        - webinar
*      summary: "Listar Reuniones"
*      description: Este endpoint es para listar las reuniones totales.
*      responses:
*        '200':
*          description: Retorna el objeto insertado en la coleccion.
*        '422':
*          description: Error de validacion.
*/
webinarRouter.get('/webinar', Webinars.getWebinars);
/**
 * @swagger
 * /webinar/{id}:
 *    get:
 *      tags:
 *        - webinar
 *      summary: "Listar Reuniones por ID"
 *      description: Este endpoint es para mostar las reuniones por su ID.
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de las reuniones
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */
webinarRouter.get('/webinar/:id', Webinars.getWebinar);
/**
 * @swagger
 * /webinar:
 *    post:
 *      tags:
 *        - webinar
 *      summary: "Crear reunion"
 *      description: Este endpoint es para crear reuniones
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/webinar"
 *      responses:
 *        '201':
 *          description: Se genero la reunion correctamente.
 *        '400':
 *          description: No se pudo coordinar la reunion.
 */
webinarRouter.post('/webinar', Webinars.postWebinar);
/**
 * @swagger
 * /webinar/{id}:
 *    put:
 *      tags:
 *        - webinar
 *      summary: "Editar reuniones"
 *      description: Este endpoint es para editar reuniones.
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del las reuniones
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/webinar"
 *      responses:
 *        '201':
 *          description: Retorna el objeto editado .
 *        '400':
 *          description: No se pudo modificar la reunion.
 */
webinarRouter.put('/webinar/:id', Webinars.putWebinar);
/**
 * @swagger
 * /webinar/{id}:
 *    delete:
 *      tags:
 *        - webinar
 *      summary: "Delete Reuniones por ID"
 *      description: Este endpoint es para eliminar las reuniones por su ID.
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de las reuniones
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      responses:
 *        '200':
 *          description: Retorna un mensaje de eliminacion de la reunion.
 *        '422':
 *          description: Error de validacion.
 */
webinarRouter.delete('/webinar/:id', Webinars.deleteWebinar);
export default webinarRouter;
//# sourceMappingURL=webinars.routes.js.map