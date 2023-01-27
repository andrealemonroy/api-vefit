"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DiseasesSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    symptoms: {
        type: String,
        required: true,
    },
    causes: {
        type: String,
        required: true,
    },
    treatments: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
exports.default = (0, mongoose_1.model)("Disease", DiseasesSchema);
//# sourceMappingURL=disease.model.js.map