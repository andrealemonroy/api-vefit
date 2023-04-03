import { Router } from "express";
import * as categoriesController from "../controllers/categories.controller"


const categoriesRouter = Router()


categoriesRouter.get('/category', categoriesController.getCategory);
categoriesRouter.post('/category', categoriesController.createCategory);
categoriesRouter.get('/categoryProduct', categoriesController.getCategoryByIngredients);



export default categoriesRouter