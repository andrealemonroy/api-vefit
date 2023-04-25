import { Router } from 'express';
import * as medicalReportController from "../controllers/medicalReports.controller";

const medicalReportRouter = Router();
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
medicalReportRouter.get(
  '/medicalReports',
  medicalReportController.getMedicalReports
);

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

medicalReportRouter.get(
  '/medicalReports/:id',
  medicalReportController.getMedicalReport
);

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

medicalReportRouter.post(
  '/medicalReports',
  medicalReportController.createMedicalReport
);

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
medicalReportRouter.put(
  '/medicalReports/:id',
  medicalReportController.updateMedicalReport
);

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


medicalReportRouter.delete(
  '/medicalReports/:id',
  medicalReportController.deleteMedicalReport
);

export default medicalReportRouter;
