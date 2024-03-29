"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategoriesSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        require: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
exports.default = (0, mongoose_1.model)("Category", CategoriesSchema);
