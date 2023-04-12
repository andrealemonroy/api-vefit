"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
require('passport');
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};
exports.ensureAuthenticated = ensureAuthenticated;
//# sourceMappingURL=ensureAuthenticate.js.map