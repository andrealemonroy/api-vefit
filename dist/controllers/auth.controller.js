"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.createToken = void 0;
const SignUpUser_model_1 = __importDefault(require("../models/SignUpUser.model"));
const passport_1 = __importDefault(require("passport"));
const qs_1 = __importDefault(require("qs"));
const passportConfig_1 = require("../middleware/passportConfig");
const UserCapa1_model_1 = __importDefault(require("../models/UserCapa1.model"));
const UserCapa1_model_2 = __importDefault(require("../models/UserCapa1.model"));
require("dotenv").config();
const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, LOCAL_HOST } = process.env;
passportConfig_1.configPassport; // configuracion passport
const jwt = require("jsonwebtoken");
const createToken = (user) => {
    console.log("createToken", process.env.JWT_SECRET);
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 1000, // 24 hours
    });
};
exports.createToken = createToken;
const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res
            .status(403)
            .json({ auth: false, message: "No token provided." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
};
const findAdminByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield SignUpUser_model_1.default.findOne({ email });
});
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserCapa1_model_2.default.findOne({ email: email });
});
exports.findUserByEmail = findUserByEmail;
const adminSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send("El email y la contraseña son requeridos");
    }
    try {
        console.log(req.body.email);
        const findUser = yield findAdminByEmail(req.body.email);
        if (!findUser) {
            return res.status(404).send("No user found.");
        }
        if ((findUser === null || findUser === void 0 ? void 0 : findUser.password) !== req.body.password) {
            return res.status(401).json({
                auth: false,
                token: null,
                message: "Contraseña incorrecta",
            });
        }
        const token = (0, exports.createToken)(findUser);
        res.status(200).json({
            auth: true,
            token,
            message: "Bienvenido a tu cuenta",
            user: findUser,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error al iniciar sesión");
    }
});
const login = passport_1.default.authenticate("auth0", { scope: "openid profile email" }); // usa la estartegia definida para el login definida en passport
const callback = (req, res, next) => {
    // callback maneja la respuesta de autenticaciones
    passport_1.default.authenticate("auth0", (err, user, _info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect("/login");
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/profileTem");
        });
    })(req, res, next);
};
const profile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.user;
    try {
        const user = yield UserCapa1_model_1.default.findOne({ email: email });
        return res.json(user);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});
const logout = (req, res, next) => {
    let params = {
        client_id: AUTH0_CLIENT_ID,
        returnTo: LOCAL_HOST,
    };
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        // console.log(req);
        req.session.destroy((err) => {
            res.clearCookie("connect.sid");
            res.redirect(`https://${AUTH0_DOMAIN}/oidc/logout?get_logout_redirect_uri= ${qs_1.default.stringify(params)}`);
        });
    });
};
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserCapa1_model_1.default.findById(req.params.id);
    if (!user) {
        return res.status(404).send("No user found.");
    }
    const token = (0, exports.createToken)(user);
    res.status(200).json({ auth: true, token });
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserCapa1_model_1.default.findByIdAndDelete(req.userId);
    if (!user) {
        return res.status(404).send("No user found.");
    }
    res.status(200).json({ auth: false, token: null });
});
const me = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = yield UserCapa1_model_1.default.findById(decoded.id);
    res.json(user);
});
exports.default = {
    adminSignIn,
    logout,
    updateUser,
    deleteUser,
    verifyToken,
    me,
    callback,
    login,
    profile,
};
//# sourceMappingURL=auth.controller.js.map