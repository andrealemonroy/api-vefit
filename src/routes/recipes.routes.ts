import { Router } from 'express';
import * as recipesController from "../controllers/recipes.controller";

const recipesRouter = Router();

recipesRouter.get(
  '/recipes',
  recipesController.getRecipes
);
recipesRouter.get(
  '/recipes/:id',
  recipesController.getRecipeById
);
recipesRouter.post(
  '/recipes',
  recipesController.createRecipe
);
recipesRouter.put(
  '/recipes/:id',
  recipesController.updateRecipe
);
recipesRouter.delete(
  '/recipes/:id',
  recipesController.deleteRecipe
);

export default recipesRouter;
