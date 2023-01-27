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
exports.deleteDisease = exports.updateDisease = exports.createDisease = exports.getDisease = exports.getDiseases = void 0;
const disease_model_1 = __importDefault(require("../models/disease.model"));
const getDiseases = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const diseases = yield disease_model_1.default.find();
        res.status(200).json(diseases);
    }
    catch (error) {
        next(error);
    }
});
exports.getDiseases = getDiseases;
const getDisease = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const disease = yield disease_model_1.default.findById(req.params.id);
        res.status(200).json(disease);
    }
    catch (error) {
        next(error);
    }
});
exports.getDisease = getDisease;
const createDisease = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const disease = yield disease_model_1.default.create(req.body);
        res.status(201).json(disease);
    }
    catch (error) {
        next(error);
    }
});
exports.createDisease = createDisease;
const updateDisease = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const disease = yield disease_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(disease);
    }
    catch (error) {
        next(error);
    }
});
exports.updateDisease = updateDisease;
const deleteDisease = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const disease = yield disease_model_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json(disease);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteDisease = deleteDisease;
//# sourceMappingURL=diseases.controller.js.map