import { Router } from "express";
import * as foodPlansCtrl from "../controllers/foodPlans.controller";

const foodPlansRouter = Router();

foodPlansRouter.get("/foodPlans", foodPlansCtrl.getFoodPlans);
foodPlansRouter.get("/foodPlans/:id", foodPlansCtrl.getFoodPlan);
foodPlansRouter.post("/foodPlans", foodPlansCtrl.createFoodPlan);
foodPlansRouter.put("/foodPlans/:id", foodPlansCtrl.updateFoodPlan);
foodPlansRouter.delete("/foodPlans/:id", foodPlansCtrl.deleteFoodPlan);

export default foodPlansRouter;
