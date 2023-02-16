import { Document, Schema, model } from 'mongoose';

export interface IMedicalReport extends Document {
  initialDate: string;
  endDate: string;
  nutritionist: string;
  patient: string;
  nutritionalDiagnosis: string;
  nutritionalObjective: string;
  nutritionalRecommendations: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
}

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

export default model<IMedicalReport>('MedicalReport', MedicalReportSchema);