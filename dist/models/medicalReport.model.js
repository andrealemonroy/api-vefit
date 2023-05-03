import { Schema, model } from 'mongoose';
const MedicalReportSchema = new Schema({
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
export default model('MedicalReport', MedicalReportSchema);
//# sourceMappingURL=MedicalReport.model.js.map