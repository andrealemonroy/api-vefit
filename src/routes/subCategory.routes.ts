import { Router } from "express";
import * as subCategoriesController from "../controllers/subCategories.controller";


const subCategoriesRouter = Router() 

/**
* @swagger
* /subCategory:
*    get:
*      tags:
*        - subCategory
*      summary: "Listar Categorias"
*      description: Este endpoint es para listar las categorias totales.
*      responses:
*        '200':
*          description: Retorna el objeto insertado en la coleccion.
*        '422':
*          description: Error de validacion.
*/

subCategoriesRouter.get('/subCategory', subCategoriesController.getSubCategory);
 

/** 
 * @swagger
 * /subCategory/{id}:
 *    get:
 *      tags:
 *        - subCategory
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


subCategoriesRouter.post('/subCategory', subCategoriesController.createSubCategory);


/**
 * --------@swagger--------
 * /subCategory:
 *    post:
 *      tags:
 *        - subCategory
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


/**
 * @swagger
 * /subCategory/{id}:
 *    put:
 *      tags: 
 *        - subCategory
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


subCategoriesRouter.put("/subCategory/:id", subCategoriesController.updateSubCategory);


/**
 * @swagger
 * /subCategory/{id}:
 *    delete:
 *      tags: 
 *        - subCategory
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


subCategoriesRouter.delete("/subCategory/:id", subCategoriesController.deleteSubCategory);

export default subCategoriesRouter