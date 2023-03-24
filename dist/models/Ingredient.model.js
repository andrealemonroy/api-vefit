"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const IngredientsSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)("Ingredient", IngredientsSchema);
//# sourceMappingURL=Ingredient.model.js.map