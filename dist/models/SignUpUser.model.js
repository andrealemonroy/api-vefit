"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const signUpUserSchema = new mongoose_1.Schema({
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
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('SignUpUser', signUpUserSchema);
//# sourceMappingURL=SignUpUser.model.js.map