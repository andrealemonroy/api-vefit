"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const updateUser = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    kindOfFood: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    diseases: {
        type: Array,
        required: true,
    },
    termsAndConditions: {
        type: Boolean,
        required: true,
    },
    policy: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('User', updateUser);
//# sourceMappingURL=User.model.js.map