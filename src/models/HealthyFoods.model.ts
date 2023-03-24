import { Document, Schema, model } from 'mongoose';

export interface IHealthyFoods extends Document {
  nameFood: string;
  ingredients: [];
  preparation: string;
  createdAt: Date;
  updatedAt: Date;
}

const HealthyFoodsSchema = new Schema({
  nameFood: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  preparation: {
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
});

export default model<IHealthyFoods>('HealthyFoods', HealthyFoodsSchema);