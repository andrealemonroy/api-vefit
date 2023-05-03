require('passport');
export const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};
//# sourceMappingURL=ensureAuthenticate.js.map