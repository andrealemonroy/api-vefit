"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMedicalReport = exports.updateMedicalReport = exports.createMedicalReport = exports.getMedicalReport = exports.getMedicalReports = void 0;
const MedicalReport_model_1 = __importDefault(require("../models/MedicalReport.model"));
const getMedicalReports = async (req, res) => {
    const medicalReports = await MedicalReport_model_1.default.find();
    res.json(medicalReports);
};
exports.getMedicalReports = getMedicalReports;
const getMedicalReport = async (req, res) => {
    const medicalReport = await MedicalReport_model_1.default.findById(req.params.id);
    res.json(medicalReport);
};
exports.getMedicalReport = getMedicalReport;
const createMedicalReport = async (req, res) => {
    const medicalReport = await MedicalReport_model_1.default.create(req.body);
    res.json(medicalReport);
};
exports.createMedicalReport = createMedicalReport;
const updateMedicalReport = async (req, res) => {
    const medicalReport = await MedicalReport_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(medicalReport);
};
exports.updateMedicalReport = updateMedicalReport;
const deleteMedicalReport = async (req, res) => {
    await MedicalReport_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: 'Medical Report deleted' });
};
exports.deleteMedicalReport = deleteMedicalReport;
