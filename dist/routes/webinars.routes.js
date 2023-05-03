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
const Webinars = __importStar(require("../controllers/webinars.controller"));
const webinarRouter = (0, express_1.Router)();
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
exports.default = webinarRouter;
