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
exports.deleteCategory = exports.updateCategry = exports.getCategoryByIngredients = exports.getCategory = exports.createCategory = void 0;
const Categories_model_1 = __importDefault(require("../models/Categories.model"));
const Ingredient_model_1 = __importDefault(require("../models/Ingredient.model"));
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield Categories_model_1.default.create(req.body);
        return res.json(category);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error creating category',
            error,
        });
    }
});
exports.createCategory = createCategory;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield Categories_model_1.default.find();
    return res.json(category);
});
exports.getCategory = getCategory;
const getCategoryByIngredients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.name;
        const category = yield Categories_model_1.default.findOne({ name }); // Buscar la categoría con su producto por nombre en la base de datos
        if (!category) {
            return res.status(404).json({
                message: `No se encontró una categoría con el nombre "${name}"`,
            });
        }
        const ingredients = yield Ingredient_model_1.default.find({
            category: category._id,
        }).populate('category');
        res.json(ingredients);
    }
    catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: 'Error al obtener la categoría de ingredientes' });
    }
});
exports.getCategoryByIngredients = getCategoryByIngredients;
const updateCategry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield Categories_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return res.json(category);
});
exports.updateCategry = updateCategry;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield Categories_model_1.default.findByIdAndDelete(req.params.id);
    console.log(category);
    return res.json(category);
});
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=categories.controller.js.map