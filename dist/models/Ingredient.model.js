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
exports.default = (0, mongoose_1.model)("Ingredient", IngredientsSchema);
//# sourceMappingURL=Ingredient.model.js.map