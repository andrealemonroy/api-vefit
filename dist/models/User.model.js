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
    birthday: {
        type: Date,
        required: false,
    },
    weight: {
        type: Number,
        required: false,
    },
    height: {
        type: Number,
        required: false,
    },
    diseases: {
        type: Array,
        required: false,
    },
    sub: {
        type: String,
        unique: true,
        required: false
    }
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('User', updateUser);
//# sourceMappingURL=User.model.js.map