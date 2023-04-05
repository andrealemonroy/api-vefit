"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FoodPlansSchema = new mongoose_1.Schema({
    patient: {
        type: Object,
        required: true,
    },
    dietitian: {
        type: String,
        required: false,
    },
    recipe: {
        type: Object,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    schedule: {
        type: Object,
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
exports.default = (0, mongoose_1.model)("FoodPlan", FoodPlansSchema);
//# sourceMappingURL=FoodPlans.model.js.map