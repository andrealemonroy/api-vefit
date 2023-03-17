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
exports.deleteHealthyFoods = exports.updateHealthyFoods = exports.createHealthyFoods = exports.getHealthyFood = exports.getHealthyFoods = void 0;
const HealthyFoods_model_1 = __importDefault(require("../models/HealthyFoods.model"));
const getHealthyFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const healthyFoods = yield HealthyFoods_model_1.default.find();
    res.json(healthyFoods);
});
exports.getHealthyFoods = getHealthyFoods;
const getHealthyFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const healthyFood = yield HealthyFoods_model_1.default.findById(req.params.id);
    res.json(healthyFood);
});
exports.getHealthyFood = getHealthyFood;
const createHealthyFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const healthyFoods = yield HealthyFoods_model_1.default.create(req.body);
    res.json(healthyFoods);
});
exports.createHealthyFoods = createHealthyFoods;
const updateHealthyFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const healthyFoods = yield HealthyFoods_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(healthyFoods);
});
exports.updateHealthyFoods = updateHealthyFoods;
const deleteHealthyFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield HealthyFoods_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: 'Healthy Foods deleted' });
});
exports.deleteHealthyFoods = deleteHealthyFoods;
//# sourceMappingURL=HealthyFoods.controller.js.map