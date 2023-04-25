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
const healthyFoodsController = __importStar(require("../controllers/healthyFoods.controller"));
const healthyFoodsRouter = (0, express_1.Router)();
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
healthyFoodsRouter.post('/healthyFoods', healthyFoodsController.createHealthyFoods);
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
healthyFoodsRouter.put('/healthyFoods/:id', healthyFoodsController.updateHealthyFoods);
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
healthyFoodsRouter.delete('/healthyFoods/:id', healthyFoodsController.deleteHealthyFoods);
exports.default = healthyFoodsRouter;
//# sourceMappingURL=healthyFoods.routes.js.map