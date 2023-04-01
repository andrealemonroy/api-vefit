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
exports.deleteIngredient = exports.updateIngredient = exports.createIngredient = exports.getIngredient = exports.getIngredients = void 0;
const Ingredient_model_1 = __importDefault(require("../models/Ingredient.model"));
const Categories_model_1 = __importDefault(require("../models/Categories.model"));
const getIngredients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ingredients = yield Ingredient_model_1.default.find().populate("category", {
            name: 1,
            image: 1,
        });
        res.json(ingredients);
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.getIngredients = getIngredients;
const getIngredient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const ingredient = yield Ingredient_model_1.default.findById(req.params.id);
    res.json(ingredient);
});
exports.getIngredient = getIngredient;
const createIngredient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nameIngredient, proteins, sugars, carbohydrates, fats, calories, category, } = req.body;
    try {
        const categories = yield Categories_model_1.default.findOne({ name: category });
        const ingredient = yield Ingredient_model_1.default.create({
            nameIngredient,
            proteins,
            sugars,
            carbohydrates,
            fats,
            calories,
            category: categories._id,
        });
        res.json(ingredient);
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.createIngredient = createIngredient;
const updateIngredient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ingredient = yield Ingredient_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(ingredient);
});
exports.updateIngredient = updateIngredient;
const deleteIngredient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Ingredient_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: "Ingredients deleted" });
});
exports.deleteIngredient = deleteIngredient;
//# sourceMappingURL=ingredients.controller.js.map