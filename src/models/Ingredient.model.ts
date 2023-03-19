import { Schema, model } from "mongoose";


export interface IIngredient extends Document {
    nameIngredient: string;
    proteins: number;
    sugars: number;
    carbohydrates: number;
    fats: number;
    calories: number;
    createdAt: Date;
    updatedAt: Date;
}

const IngredientsSchema = new Schema({
    nameIngredient: {
        type: String,
        required: true,
        unique: true,
    },
    proteins: {
        type: Number,
        required: true,
    },
    sugars: {
        type: Number,
        required: true,
    },
    carbohydrates: {
        type: Number,
        required: true,
    },
    fats: {
        type: Number,
        required: true,
    },
    calories: {
        type: Number,
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

export default model<IIngredient>("Ingredient", IngredientsSchema);
