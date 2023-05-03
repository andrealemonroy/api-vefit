"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MedicalReportSchema = new mongoose_1.Schema({
    initialDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    nutritionist: {
        type: String,
        required: true,
    },
    patient: {
        type: String,
        required: true,
    },
    nutritionalDiagnosis: {
        type: String,
        required: true,
    },
    nutritionalObjective: {
        type: String,
        required: true,
    },
    nutritionalRecommendations: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)('MedicalReport', MedicalReportSchema);
