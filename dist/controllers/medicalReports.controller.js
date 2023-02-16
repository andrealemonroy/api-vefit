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
exports.deleteMedicalReport = exports.updateMedicalReport = exports.createMedicalReport = exports.getMedicalReport = exports.getMedicalReports = void 0;
const medicalReport_model_1 = __importDefault(require("../models/medicalReport.model"));
const getMedicalReports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const medicalReports = yield medicalReport_model_1.default.find();
    res.json(medicalReports);
});
exports.getMedicalReports = getMedicalReports;
const getMedicalReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const medicalReport = yield medicalReport_model_1.default.findById(req.params.id);
    res.json(medicalReport);
});
exports.getMedicalReport = getMedicalReport;
const createMedicalReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const medicalReport = yield medicalReport_model_1.default.create(req.body);
    res.json(medicalReport);
});
exports.createMedicalReport = createMedicalReport;
const updateMedicalReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const medicalReport = yield medicalReport_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(medicalReport);
});
exports.updateMedicalReport = updateMedicalReport;
const deleteMedicalReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield medicalReport_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: 'Medical Report deleted' });
});
exports.deleteMedicalReport = deleteMedicalReport;
//# sourceMappingURL=medicalReports.controller.js.map