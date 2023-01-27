"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AlimentsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    characteristics: {
        type: String,
        required: true,
    },
    benefits: {
        type: String,
        required: true,
    },
    recommendations: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
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
    canBeReplacedBy: {
        type: [String],
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("Aliment", AlimentsSchema);
//# sourceMappingURL=Aliment.model.js.map