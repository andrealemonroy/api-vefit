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
const alimentController = __importStar(require("../controllers/aliments.controller"));
const alimentsRouter = (0, express_1.Router)();
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
exports.default = alimentsRouter;
//# sourceMappingURL=aliments.routes.js.map