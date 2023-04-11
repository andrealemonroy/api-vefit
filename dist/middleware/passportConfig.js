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
exports.deserializeUser = exports.serializarUser = exports.configPassport = void 0;
const passport_1 = __importDefault(require("passport"));
const User_model_1 = __importDefault(require("../models/User.model"));
const passport_auth0_1 = require("passport-auth0");
require('dotenv').config();
const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET } = process.env;
exports.configPassport = passport_1.default.use("auth0", new passport_auth0_1.Strategy({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/callback",
}, function (accessToken, refreshToken, extraParams, profile, done) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = (yield User_model_1.default.findOne({ sub: profile.id })) || (yield User_model_1.default.findOne({ email: profile.emails[0].value }));
        if (!user) {
            const userRegistre = new User_model_1.default({
                name: profile.displayName,
                email: profile.emails[0].value,
                sub: profile.id,
            });
            yield userRegistre.save();
        }
        return done(null, profile);
    });
}));
exports.serializarUser = passport_1.default.serializeUser(function (user, done) {
    done(null, user.id);
});
exports.deserializeUser = passport_1.default.deserializeUser(function (id, done) {
    User_model_1.default.findOne({ sub: id }, (err, user) => {
        done(err, user);
    });
});
//# sourceMappingURL=passportConfig.js.map