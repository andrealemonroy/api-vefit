"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const diseases_routes_1 = __importDefault(require("./routes/diseases.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const aliments_routes_1 = __importDefault(require("./routes/aliments.routes"));
const medicalReports_routes_1 = __importDefault(require("./routes/medicalReports.routes"));
(0, database_1.connectDB)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.PORT || 8080;
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(auth_routes_1.default);
app.use(users_routes_1.default);
app.use(diseases_routes_1.default);
app.use(aliments_routes_1.default);
app.use(medicalReports_routes_1.default);
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map