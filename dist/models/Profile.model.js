"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProfileSchema = new mongoose_1.Schema({
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
    diseases: [{
            name: {
                type: String,
                unique: true,
                lowercase: true,
            },
            description: {
                type: String,
            },
        }],
    complete: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Profile", ProfileSchema);
//# sourceMappingURL=Profile.model.js.map