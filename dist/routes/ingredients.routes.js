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
const ingredientsController = __importStar(require("../controllers/ingredients.controller"));
const ingredientsRouter = (0, express_1.Router)();
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
exports.default = ingredientsRouter;
