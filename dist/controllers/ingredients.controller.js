"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIngredient = exports.updateIngredient = exports.createIngredient = exports.getIngredient = exports.getIngredients = void 0;
const Ingredient_model_1 = __importDefault(require("../models/Ingredient.model"));
const Categories_model_1 = __importDefault(require("../models/Categories.model"));
const getIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient_model_1.default.find().populate("category", {
            name: 1,
            image: 1,
        });
        res.json(ingredients);
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.getIngredients = getIngredients;
const getIngredient = async (req, res) => {
    const ingredient = await Ingredient_model_1.default.findById(req.params.id);
    res.json(ingredient);
};
exports.getIngredient = getIngredient;
const createIngredient = async (req, res) => {
    const { nameIngredient, proteins, sugars, carbohydrates, fats, calories, category, } = req.body;
    console.log(req.body);
    try {
        const categories = await Categories_model_1.default.findOne({ name: category });
        const ingredient = await Ingredient_model_1.default.create({
            nameIngredient,
            proteins,
            sugars,
            carbohydrates,
            fats,
            calories,
            category: categories ? categories._id : null,
        });
        res.json(ingredient);
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.createIngredient = createIngredient;
const updateIngredient = async (req, res) => {
    const ingredient = await Ingredient_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(ingredient);
};
exports.updateIngredient = updateIngredient;
const deleteIngredient = async (req, res) => {
    await Ingredient_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: "Ingredients deleted" });
};
exports.deleteIngredient = deleteIngredient;
