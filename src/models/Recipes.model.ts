import { Document, Schema, model } from 'mongoose';

export interface IRecipeModel extends Document {
  nameFood: string;
  ingredients: [];
  preparation: string;
  createdAt: Date;
  updatedAt: Date;
}

const RecipeSchema = new Schema({
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

export default model<IRecipeModel>('Recipes', RecipeSchema);