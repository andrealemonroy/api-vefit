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
exports.updateAliment = exports.deleteAliment = exports.getAliment = exports.createAliment = exports.getAliments = void 0;
const Aliment_model_1 = __importDefault(require("../models/Aliment.model"));
const getAliments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const aliments = yield Aliment_model_1.default.find();
    return res.json(aliments);
});
exports.getAliments = getAliments;
const createAliment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAliment = new Aliment_model_1.default(req.body);
    const alimentSaved = yield newAliment.save();
    return res.json(alimentSaved);
});
exports.createAliment = createAliment;
const getAliment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const aliment = yield Aliment_model_1.default.findById(req.params.id);
    return res.json(aliment);
});
exports.getAliment = getAliment;
const deleteAliment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const aliment = yield Aliment_model_1.default.findByIdAndDelete(req.params.id);
    return res.json(aliment);
});
exports.deleteAliment = deleteAliment;
const updateAliment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alimentUpdated = yield Aliment_model_1.default.findByIdAndUpdate(req.params.id);
    return res.json(alimentUpdated);
});
exports.updateAliment = updateAliment;
//# sourceMappingURL=aliments.controller.js.map