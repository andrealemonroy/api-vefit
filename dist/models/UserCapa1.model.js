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
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    termsAndConditions: {
        type: Boolean,
        required: true,
        default: true,
    },
    privacyPolicy: {
        type: Boolean,
        required: true,
        default: true,
    },
    sub: {
        type: String,
        unique: true,
        require: false,
    },
    profile: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Profile',
    }
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('UserCapa1', updateUser);
