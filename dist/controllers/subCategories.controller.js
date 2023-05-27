"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubCategory = exports.updateCategry = exports.getSubCategoryByIngredients = exports.getSubCategory = exports.createSubCategory = void 0;
const Subcategories_model_1 = __importDefault(require("../models/Subcategories.model"));
const Ingredient_model_1 = __importDefault(require("../models/Ingredient.model"));
const createSubCategory = async (req, res) => {
    try {
        const subcategory = await Subcategories_model_1.default.create(req.body);
        return res.json(subcategory);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error creating subcategory',
            error,
        });
    }
};
exports.createSubCategory = createSubCategory;
const getSubCategory = async (req, res) => {
    const subcategory = await Subcategories_model_1.default.find();
    return res.json(subcategory);
};
exports.getSubCategory = getSubCategory;
const getSubCategoryByIngredients = async (req, res) => {
    try {
        const name = req.query.name;
        const subCategory = await Subcategories_model_1.default.findOne({ name }); // Buscar la categoría con su producto por nombre en la base de datos
        if (!subCategory) {
            return res.status(404).json({
                message: `No se encontró una categoría con el nombre "${name}"`,
            });
        }
        const ingredients = await Ingredient_model_1.default.find({
            subCategory: subCategory._id,
        }).populate('subCategory');
        res.json(ingredients);
    }
    catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: 'Error al obtener la categoría de ingredientes' });
    }
};
exports.getSubCategoryByIngredients = getSubCategoryByIngredients;
const updateCategry = async (req, res) => {
    const subCategory = await Subcategories_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return res.json(subCategory);
};
exports.updateCategry = updateCategry;
const deleteSubCategory = async (req, res) => {
    const subCategory = await Subcategories_model_1.default.findByIdAndDelete(req.params.id);
    console.log(subCategory);
    return res.json(subCategory);
};
exports.deleteSubCategory = deleteSubCategory;
