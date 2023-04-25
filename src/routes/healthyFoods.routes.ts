import { Router } from 'express';
import * as healthyFoodsController from "../controllers/healthyFoods.controller";

const healthyFoodsRouter = Router();

/**
 * @swagger
 * /healthyFoods:
 *    get:
 *      tags:
 *        - healthyFoods
 *      summary: "Listar comidas saludables"
 *      description: Este endpoint es para listar las comidas saludables totales. 
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */


healthyFoodsRouter.get('/healthyFoods', healthyFoodsController.getHealthyFoods);

/** 
 * @swagger
 * /healthyFoods/{id}:
 *    get:
 *      tags:
 *        - healthyFoods
 *      summary: "Listar healthy foods por ID"
 *      description: Este endpoint es para mostar las healthy foods por ID. 
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de las  healthy foods.
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


healthyFoodsRouter.get('/healthyFoods/:id', healthyFoodsController.getHealthyFoods);

/**
 * @swagger
 * /healthyFoods:
 *    post:
 *      tags:
 *        - healthyFoods
 *      summary: "Crear healthy foods"
 *      description: Este endpoint es para crear healthy foods. 
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/healthyFoods"
 * 
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */


healthyFoodsRouter.post(
  '/healthyFoods',
  healthyFoodsController.createHealthyFoods
);


/**
 * @swagger
 * /healthyFoods/{id}:
 *    put:
 *      tags: 
 *        - healthyFoods
 *      summary: "Editar healthy foods"
 *      description: Este endpoint es para editar healthy foods. 
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de healthy foods
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/healthyFoods"
 *      responses:
 *        '200':
 *          description: Retorna el objeto editado .
 *        '422':
 *          description: Error de validacion.
 */


healthyFoodsRouter.put(
  '/healthyFoods/:id',
  healthyFoodsController.updateHealthyFoods
);


/**
 * @swagger
 * /healthyFoods/{id}:
 *    delete:
 *      tags: 
 *        - healthyFoods
 *      summary: "Eliminar healthy foods"
 *      description: Este endpoint es para eliminar una healthy foods.
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de healthy foods
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


healthyFoodsRouter.delete(
  '/healthyFoods/:id',
  healthyFoodsController.deleteHealthyFoods
);

export default healthyFoodsRouter;
