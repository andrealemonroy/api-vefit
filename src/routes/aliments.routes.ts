import { Router } from "express";
import * as alimentController from "../controllers/aliments.controller";

const alimentsRouter = Router();


 /**
 * @swagger
 * /aliments:
 *    get:
 *      tags:
 *        - aliments
 *      summary: "Listar alimentos"
 *      description: Este endpoint es para listar los alimentos totales. 
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */

alimentsRouter.get("/aliments", alimentController.getAliments);

/** 
 * @swagger
 * /aliments/{id}:
 *    get:
 *      tags:
 *        - aliments
 *      summary: "Listar alimentos por ID"
 *      description: Este endpoint es para mostar los alimentos por ID.
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de los alimentos
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
alimentsRouter.get("/aliments/:id", alimentController.getAliment);

/**
 * @swagger
 * /aliments:
 *    post:
 *      tags:
 *        - aliments
 *      summary: "Crear alimentos"
 *      description: Este endpoint es para crear alimentos.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/aliments"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */

alimentsRouter.post("/aliments", alimentController.createAliment);

/**
 * @swagger
 * /aliments/{id}:
 *    put:
 *      tags: 
 *        - aliments
 *      summary: "Editar alimentos"
 *      description: Este endpoint es para editar alimentos.
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de los alimentos
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/aliments"
 *      responses:
 *        '200':
 *          description: Retorna el objeto editado .
 *        '422':
 *          description: Error de validacion.
 */

alimentsRouter.put("/aliments/:id", alimentController.updateAliment);

/**
 * @swagger
 * /aliments/{id}:
 *    delete:
 *      tags: 
 *        - aliments
 *      summary: "Eliminar alimento"
 *      description: Este endpoint es para eliminar un alimento.
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del alimento
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


alimentsRouter.delete("/aliments/:id", alimentController.deleteAliment);

export default alimentsRouter;
