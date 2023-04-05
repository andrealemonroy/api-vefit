import { model, Schema } from "mongoose";

export interface IFoodPlan extends Document {
  patient: ISelect;
  dietitian: string;
  recipe: ISelect;
  date: string;
  schedule: ISelect;
  createdAt: Date;
  updatedAt: Date;
}

interface ISelect extends Document {
    value: string;
    label: string;
}


const FoodPlansSchema = new Schema({
  patient: {
    type: Object,
    required: true,
  },
  dietitian: {
    type: String,
    required: false,
  },
  recipe: {
    type: Object,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  schedule: {
    type: Object,
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

export default model<IFoodPlan>("FoodPlan", FoodPlansSchema);
