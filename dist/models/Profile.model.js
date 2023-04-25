"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProfileSchema = new mongoose_1.Schema({
    birthday: {
        type: String,
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
        default: []
    },
    complete: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Profile", ProfileSchema);
//# sourceMappingURL=Profile.model.js.map