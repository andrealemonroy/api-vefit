"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeUser = exports.serializarUser = exports.configPassport = void 0;
const passport_1 = __importDefault(require("passport"));
const UserCapa1_model_1 = __importDefault(require("../models/UserCapa1.model"));
const passport_auth0_1 = require("passport-auth0");
require('dotenv').config();
exports.configPassport = passport_1.default.use('auth0', new passport_auth0_1.Strategy({
    domain: process.env.AUTH0_DOMAIN || '',
    clientID: process.env.AUTH0_CLIENT_ID || '',
    clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
    callbackURL: 'http://localhost:4000/callback',
}, 
// aqui se manejan los datos del usuario y se almasenan en la ase de datos
async function (accessToken, refreshToken, extraParams, profile, done) {
    let user = (await UserCapa1_model_1.default.findOne({ sub: profile.id })) ||
        (await UserCapa1_model_1.default.findOne({ email: profile.emails[0].value }));
    if (!user) {
        console.log('estoy aqui', profile);
        const userRegistre = new UserCapa1_model_1.default({
            name: profile.displayName,
            email: profile.emails[0].value,
            sub: profile.id,
        });
        await userRegistre.save();
    }
    return done(null, profile);
}));
exports.serializarUser = passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
exports.deserializeUser = passport_1.default.deserializeUser((id, done) => {
    UserCapa1_model_1.default.findById(id, (err, user) => {
        done(err, user);
    });
});
