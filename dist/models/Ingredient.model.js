import { Schema, model } from "mongoose";
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
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
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
export default model("Ingredient", IngredientsSchema);
//# sourceMappingURL=Ingredient.model.js.map