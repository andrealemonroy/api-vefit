import { Schema, model, Document } from 'mongoose';

export interface ISubcategories extends Document {
  name: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const SubCategoriesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
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

export default model<ISubcategories>('SubCategories', SubCategoriesSchema);
