"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.encrypt = void 0;
const bcrypt_1 = require("bcrypt");
const encrypt = async (password) => {
    return await (0, bcrypt_1.hash)(password, 10);
};
exports.encrypt = encrypt;
const compare = async (password, hashPassword) => {
    return await (0, bcrypt_1.compare)(password, hashPassword);
};
exports.compare = compare;
