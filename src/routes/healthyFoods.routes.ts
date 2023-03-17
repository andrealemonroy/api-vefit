import { Router } from 'express';
import * as healthyFoodsController from "../controllers/HealthyFoods.controller";

const healthyFoodsRouter = Router();

healthyFoodsRouter.get(
  '/healthyFoods',
  healthyFoodsController.getHealthyFoods
);
healthyFoodsRouter.get(
  '/healthyFoods:id',
  healthyFoodsController.getHealthyFoods
);
healthyFoodsRouter.post(
  '/healthyFoods',
  healthyFoodsController.createHealthyFoods
);
healthyFoodsRouter.put(
  '/healthyFoods/:id',
  healthyFoodsController.updateHealthyFoods
);
healthyFoodsRouter.delete(
  '/healthyFoods/:id',
  healthyFoodsController.deleteHealthyFoods
);

export default healthyFoodsRouter;
