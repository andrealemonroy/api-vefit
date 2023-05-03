"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
async function connectDB() {
    try {
        mongoose_1.default.set('strictQuery', true);
        const db = await mongoose_1.default.connect(config_1.default.DB.URI || "");
        console.log("Database is connected to: ", db.connection.name);
    }
    catch (error) {
        console.error(error);
    }
}
exports.connectDB = connectDB;
