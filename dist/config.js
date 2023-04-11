"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
    PORT: process.env.PORT,
    DB: {
        URI: process.env.MONGODB_URI || "mongodb://localhost:27017/vefitdb",
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
    },
};
//# sourceMappingURL=config.js.map