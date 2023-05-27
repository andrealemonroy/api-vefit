"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDisease = exports.updateDisease = exports.getDisease = exports.createDisease = void 0;
const Diseases_model_1 = __importDefault(require("../models/Diseases.model"));
const createDisease = async (req, res) => {
    try {
        const disease = await Diseases_model_1.default.create(req.body);
        return res.json(disease);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error creating disease',
            error,
        });
    }
};
exports.createDisease = createDisease;
const getDisease = async (req, res) => {
    const disease = await Diseases_model_1.default.find();
    return res.json(disease);
};
exports.getDisease = getDisease;
const updateDisease = async (req, res) => {
    const disease = await Diseases_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return res.json(disease);
};
exports.updateDisease = updateDisease;
const deleteDisease = async (req, res) => {
    const disease = await Diseases_model_1.default.findByIdAndDelete(req.params.id);
    return res.json({
        message: 'Enfermedad eliminada',
    });
};
exports.deleteDisease = deleteDisease;
