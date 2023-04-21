import { Router } from "express";
import * as medicalReportController from "../controllers/medicalReports.controller";

const medicalReportRouter = Router();

medicalReportRouter.get(
   "/medicalReports",
   medicalReportController.getMedicalReports
);
medicalReportRouter.get(
   "/medicalReports/:id",
   medicalReportController.getMedicalReport
);
medicalReportRouter.post(
   "/medicalReports",
   medicalReportController.createMedicalReport
);
medicalReportRouter.put(
   "/medicalReports/:id",
   medicalReportController.updateMedicalReport
);
medicalReportRouter.delete(
   "/medicalReports/:id",
   medicalReportController.deleteMedicalReport
);

export default medicalReportRouter;
