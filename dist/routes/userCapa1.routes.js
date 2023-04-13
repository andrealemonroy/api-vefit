"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userCapa1_1 = require("../controllers/userCapa1");
const userCapa1 = (0, express_1.Router)();
userCapa1.post('/signIn', userCapa1_1.signIn);
userCapa1.post('/signUp', userCapa1_1.signUp);
exports.default = userCapa1;
//# sourceMappingURL=userCapa1.routes.js.map