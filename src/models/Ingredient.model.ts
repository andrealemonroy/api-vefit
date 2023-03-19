import { Schema, model } from "mongoose";


export interface IIngredient extends Document {
    nameIngredient: string;
    proteins: string;
    sugars: string;
    carbohydrates: string;
    fats: string;
    calories: string;
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
        type: String,
        required: true,
    },
    sugars: {
        type: String,
        required: true,
    },
    carbohydrates: {
        type: String,
        required: true,
    },
    fats: {
        type: String,
        required: true,
    },
    calories: {
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

export default model<IIngredient>("Ingredient", IngredientsSchema);
