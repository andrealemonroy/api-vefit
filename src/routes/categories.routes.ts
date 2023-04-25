import { Router } from "express";
import * as categoriesController from "../controllers/categories.controller"


const categoriesRouter = Router() 

/**
* @swagger
* /category:
*    get:
*      tags:
*        - category
*      summary: "Listar Categorias"
*      description: Este endpoint es para listar las categorias totales.
*      responses:
*        '200':
*          description: Retorna el objeto insertado en la coleccion.
*        '422':
*          description: Error de validacion.
*/

categoriesRouter.get('/category', categoriesController.getCategory);
 

/** 
 * @swagger
 * /category/{id}:
 *    get:
 *      tags:
 *        - category
 *      summary: "Listar Caterogia por ID"
 *      description: Este endpoint es para mostar las categorias por ID. 
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de las categorias
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


categoriesRouter.post('/category', categoriesController.createCategory);


/**
 * --------@swagger--------
 * /category:
 *    post:
 *      tags:
 *        - category
 *      summary: "Crear Categoria"
 *      description: Este endpoint es para crear una categoria. 
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/categories"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */


categoriesRouter.get('/categoryProduct', categoriesController.getCategoryByIngredients);//


/**
 * @swagger
 * /category/{id}:
 *    put:
 *      tags: 
 *        - category
 *      summary: "Editar categoria"
 *      description: Este endpoint es para editar categorias. 
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de las categorias.
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/categories"
 *      responses:
 *        '200':
 *          description: Retorna el objeto editado .
 *        '422':
 *          description: Error de validacion.
 */


categoriesRouter.put("/category/:id", categoriesController.updateCategry);


/**
 * @swagger
 * /category/{id}:
 *    delete:
 *      tags: 
 *        - category
 *      summary: "Eliminar catagoria"
 *      description: Este endpoint es para eliminar una categoria.
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de las categorias
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


categoriesRouter.delete("/category/:id", categoriesController.deleteCategory);

export default categoriesRouter