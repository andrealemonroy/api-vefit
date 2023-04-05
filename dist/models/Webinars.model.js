"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const webinars = new mongoose_1.Schema({
    titulo: {
        type: String,
        required: true,
    },
    fechaYHora: {
        type: Date,
        required: true,
    },
    link: {
        type: Array,
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Webinars", webinars);
//# sourceMappingURL=Webinars.model.js.map