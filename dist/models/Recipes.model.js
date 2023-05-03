"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RecipeSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)('Recipes', RecipeSchema);
