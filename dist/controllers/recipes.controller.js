"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipe = exports.updateRecipe = exports.getRecipeById = exports.getRecipes = exports.createRecipe = void 0;
const Recipes_model_1 = __importDefault(require("../models/Recipes.model"));
const createRecipe = async (req, res) => {
    const recipe = req.body;
    try {
        if (!recipe) {
            return res.status(400).send('No has enviado la receta');
        }
        const newRecipe = await Recipes_model_1.default.create(recipe);
        return res.status(201).json(newRecipe);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
};
exports.createRecipe = createRecipe;
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipes_model_1.default.find();
        return res.status(200).json(recipes);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
};
exports.getRecipes = getRecipes;
const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipes_model_1.default.findById(req.params.id);
        return res.status(200).json(recipe);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
};
exports.getRecipeById = getRecipeById;
const updateRecipe = async (req, res) => {
    const recipe = req.body;
    try {
        if (!recipe) {
            return res.status(400).send('No has enviado la receta');
        }
        const updatedRecipe = await Recipes_model_1.default.findByIdAndUpdate(req.params.id, recipe, {
            new: true,
        });
        return res.status(200).json(updatedRecipe);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
};
exports.updateRecipe = updateRecipe;
const deleteRecipe = async (req, res) => {
    try {
        await Recipes_model_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: 'Receta eliminada' });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
};
exports.deleteRecipe = deleteRecipe;
