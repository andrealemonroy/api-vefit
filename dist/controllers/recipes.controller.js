"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipe = exports.updateRecipe = exports.getRecipeById = exports.getRecipes = exports.createRecipe = void 0;
const Recipes_model_1 = __importDefault(require("../models/Recipes.model"));
const createRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = req.body;
    try {
        if (!recipe) {
            return res.status(400).send('No has enviado la receta');
        }
        const newRecipe = yield Recipes_model_1.default.create(recipe);
        return res.status(201).json(newRecipe);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
});
exports.createRecipe = createRecipe;
const getRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield Recipes_model_1.default.find();
        return res.status(200).json(recipes);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
});
exports.getRecipes = getRecipes;
const getRecipeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield Recipes_model_1.default.findById(req.params.id);
        return res.status(200).json(recipe);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
});
exports.getRecipeById = getRecipeById;
const updateRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = req.body;
    try {
        if (!recipe) {
            return res.status(400).send('No has enviado la receta');
        }
        const updatedRecipe = yield Recipes_model_1.default.findByIdAndUpdate(req.params.id, recipe, {
            new: true,
        });
        return res.status(200).json(updatedRecipe);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
});
exports.updateRecipe = updateRecipe;
const deleteRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Recipes_model_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: 'Receta eliminada' });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
});
exports.deleteRecipe = deleteRecipe;
//# sourceMappingURL=recipes.controller.js.map