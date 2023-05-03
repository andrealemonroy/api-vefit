"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHealthyFoods = exports.updateHealthyFoods = exports.createHealthyFoods = exports.getHealthyFood = exports.getHealthyFoods = void 0;
const Recipes_model_1 = __importDefault(require("../models/Recipes.model"));
const getHealthyFoods = async (req, res) => {
    const healthyFoods = await Recipes_model_1.default.find();
    res.json(healthyFoods);
};
exports.getHealthyFoods = getHealthyFoods;
const getHealthyFood = async (req, res) => {
    const healthyFood = await Recipes_model_1.default.findById(req.params.id);
    res.json(healthyFood);
};
exports.getHealthyFood = getHealthyFood;
const createHealthyFoods = async (req, res) => {
    const healthyFoods = await Recipes_model_1.default.create(req.body);
    res.json(healthyFoods);
};
exports.createHealthyFoods = createHealthyFoods;
const updateHealthyFoods = async (req, res) => {
    const healthyFoods = await Recipes_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(healthyFoods);
};
exports.updateHealthyFoods = updateHealthyFoods;
const deleteHealthyFoods = async (req, res) => {
    await Recipes_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: 'Healthy Foods deleted' });
};
exports.deleteHealthyFoods = deleteHealthyFoods;
