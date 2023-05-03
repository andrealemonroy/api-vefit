import { Router } from "express";
import * as ingredientsController from "../controllers/ingredients.controller";
const ingredientsRouter = Router();
/**
* @swagger
* /ingredients:
*    get:
*      tags:
*        - ingredients
*      summary: "Listar Ingredientes"
*      description: Este endpoint es para listar los ingredientes totales
*      responses:
*        '200':
*          description: Retorna el objeto insertado en la coleccion.
*        '422':
*          description: Error de validacion.
*/
ingredientsRouter.get("/ingredients", ingredientsController.getIngredients);
/**
 * @swagger
 * /ingredients/{id}:
 *    get:
 *      tags:
 *        - ingredients
 *      summary: "Listar Ingredients por ID"
 *      description: Este endpoint es para mostar los ingredientes por ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del ingrediente
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
ingredientsRouter.get("/ingredients/:id", ingredientsController.getIngredient);
/**
 * @swagger
 * /ingredients:
 *    post:
 *      tags:
 *        - ingredients
 *      summary: "Crear ingredients"
 *      description: Este endpoint es para crear ingredientes
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/ingredients"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */
ingredientsRouter.post("/ingredients", ingredientsController.createIngredient);
/**
 * @swagger
 * /ingredients/{id}:
 *    put:
 *      tags:
 *        - ingredients
 *      summary: "Editar ingredients"
 *      description: Este endpoint es para editar ingredientes
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del ingrediente
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/ingredients"
 *      responses:
 *        '200':
 *          description: Retorna el objeto editado .
 *        '422':
 *          description: Error de validacion.
 */
ingredientsRouter.put("/ingredients/:id", ingredientsController.updateIngredient);
/**
 * @swagger
 * /ingredients/{id}:
 *    delete:
 *      tags:
 *        - ingredients
 *      summary: "Eliminar ingredients"
 *      description: Este endpoint es para eliminar un ingrediente
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del ingrediente
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      responses:
 *        '200':
 *          description: Retorna el objeto editado .
 *        '422':
 *          description: Error de validacion.
 */
ingredientsRouter.delete("/ingredients/:id", ingredientsController.deleteIngredient);
export default ingredientsRouter;
//# sourceMappingURL=ingredients.routes.js.map