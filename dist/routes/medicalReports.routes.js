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
const medicalReportController = __importStar(require("../controllers/medicalReports.controller"));
const medicalReportRouter = (0, express_1.Router)();
/**
 * @swagger
 * /medicalReports:
 *    get:
 *      tags:
 *        - medicalReports
 *      summary: "Listar medicalReports"
 *      description: Este endpoint es para listar los reportes medicos totales.
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */
medicalReportRouter.get('/medicalReports', medicalReportController.getMedicalReports);
/**
 * @swagger
 * /medicalReports/{id}:
 *    get:
 *      tags:
 *        - medicalReports
 *      summary: "Listar medicalReports por ID"
 *      description: Este endpoint es para mostar los reportes medicos por ID.
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de medicalReports
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
medicalReportRouter.get('/medicalReports/:id', medicalReportController.getMedicalReport);
/**
 * @swagger
 * /medicalReports:
 *    post:
 *      tags:
 *        - medicalReports
 *      summary: "Crear medicalReports"
 *      description: Este endpoint es para crear un reporte medico.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/medicalReports"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 */
medicalReportRouter.post('/medicalReports', medicalReportController.createMedicalReport);
/**
 * @swagger
 * /medicalReports/{id}:
 *    put:
 *      tags:
 *        - medicalReports
 *      summary: "Editar medicalReports"
 *      description: Este endpoint es para editar reportes medicos.
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del medicalReports
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/medicalReports"
 *      responses:
 *        '200':
 *          description: Retorna el objeto editado .
 *        '422':
 *          description: Error de validacion.
 */
medicalReportRouter.put('/medicalReports/:id', medicalReportController.updateMedicalReport);
/**
 * @swagger
 * /medicalReports/{id}:
 *    delete:
 *      tags:
 *        - medicalReports
 *      summary: "Eliminar medicalReports"
 *      description: Este endpoint es para eliminar un reporte medico.
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID de medicalReports
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
medicalReportRouter.delete('/medicalReports/:id', medicalReportController.deleteMedicalReport);
exports.default = medicalReportRouter;
