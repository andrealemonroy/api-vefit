import { Router } from "express";
import * as alimentController from "../controllers/aliments.controller";

const alimentsRouter = Router();

alimentsRouter.get("/aliments", alimentController.getAliments);
alimentsRouter.get("/aliments:id", alimentController.getAliment);
alimentsRouter.post("/aliments", alimentController.createAliment);
alimentsRouter.put("/aliments:id", alimentController.updateAliment);
alimentsRouter.delete("/aliments:id", alimentController.deleteAliment);

export default alimentsRouter;
