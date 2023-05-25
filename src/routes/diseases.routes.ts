
import { Router } from "express";
import * as diseasesController from "../controllers/diseases.controller"

const diseasesRouter = Router()

diseasesRouter.get('/diseases', diseasesController.getDisease);

diseasesRouter.post('/diseases', diseasesController.createDisease);

diseasesRouter.put('/diseases/:id', diseasesController.updateDisease);

diseasesRouter.delete('/diseases/:id', diseasesController.deleteDisease);

export default diseasesRouter;