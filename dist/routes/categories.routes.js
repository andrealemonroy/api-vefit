"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriesRouter = (0, express_1.Router)();
categoriesRouter.get('/category');
categoriesRouter.post('/category');
exports.default = categoriesRouter;
//# sourceMappingURL=categories.routes.js.map