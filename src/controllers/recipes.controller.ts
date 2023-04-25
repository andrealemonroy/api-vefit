import { Request, Response } from 'express';
import RecipesModel from '../models/Recipes.model';

const createRecipe = async (req: Request, res: Response) => {
  const recipe = req.body;
  try {
    if (!recipe) {
      return res.status(400).send('No has enviado la receta');
    }

    const newRecipe = await RecipesModel.create(recipe);

    return res.status(201).json(newRecipe);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await RecipesModel.find();
    return res.status(200).json(recipes);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

const getRecipeById = async (req: Request, res: Response) => {
  try {
    const recipe = await RecipesModel.findById(req.params.id);
    return res.status(200).json(recipe);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

const updateRecipe = async (req: Request, res: Response) => {
  const recipe = req.body;
  try {
    if (!recipe) {
      return res.status(400).send('No has enviado la receta');
    }

    const updatedRecipe = await RecipesModel.findByIdAndUpdate(
      req.params.id,
      recipe,
      {
        new: true,
      }
    );

    return res.status(200).json(updatedRecipe);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

const deleteRecipe = async (req: Request, res: Response) => {
  try {
    await RecipesModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'Receta eliminada' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

export { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe };
