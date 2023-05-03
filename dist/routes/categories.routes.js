"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriesController = __importStar(require("../controllers/categories.controller"));
const categoriesRouter = (0, express_1.Router)();
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
categoriesRouter.get('/categoryProduct', categoriesController.getCategoryByIngredients); //
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
exports.default = categoriesRouter;
