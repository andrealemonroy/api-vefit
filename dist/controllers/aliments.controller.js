"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAliment = exports.deleteAliment = exports.getAliment = exports.createAliment = exports.getAliments = void 0;
const Aliment_model_1 = __importDefault(require("../models/Aliment.model"));
const getAliments = async (req, res) => {
    const aliments = await Aliment_model_1.default.find();
    return res.json(aliments);
};
exports.getAliments = getAliments;
const createAliment = async (req, res) => {
    try {
        const aliment = new Aliment_model_1.default(req.body);
        await aliment.save();
        return res.json(aliment);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error creating aliment',
            error,
        });
    }
};
exports.createAliment = createAliment;
const getAliment = async (req, res) => {
    const aliment = await Aliment_model_1.default.findById(req.params.id);
    return res.json(aliment);
};
exports.getAliment = getAliment;
const deleteAliment = async (req, res) => {
    const aliment = await Aliment_model_1.default.findByIdAndDelete(req.params.id);
    console.log(aliment);
    return res.json(aliment);
};
exports.deleteAliment = deleteAliment;
const updateAliment = async (req, res) => {
    const aliment = await Aliment_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return res.json(aliment);
};
exports.updateAliment = updateAliment;
