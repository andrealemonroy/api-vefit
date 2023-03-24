import { Router } from "express";
import * as ingredientsController from "../controllers/ingredients.controller";

const ingredientsRouter = Router();

ingredientsRouter.get("/ingredients", ingredientsController.getIngredients);
ingredientsRouter.get("/ingredients/:id", ingredientsController.getIngredient);
ingredientsRouter.post("/ingredients", ingredientsController.createIngredient);
ingredientsRouter.put("/ingredients/:id", ingredientsController.updateIngredient);
ingredientsRouter.delete("/ingredients/:id", ingredientsController.deleteIngredient);

export default ingredientsRouter;
