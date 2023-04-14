import { Router } from "express";
import * as categoriesController from "../controllers/categories.controller"


const categoriesRouter = Router()


categoriesRouter.get('/category', categoriesController.getCategory);
categoriesRouter.post('/category', categoriesController.createCategory);
categoriesRouter.get('/categoryProduct', categoriesController.getCategoryByIngredients);
categoriesRouter.put("/category/:id", categoriesController.updateCategry);
categoriesRouter.delete("/category/:id", categoriesController.deleteCategory);

export default categoriesRouter