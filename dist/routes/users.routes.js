"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const userRouter = (0, express_1.Router)();
userRouter.get('/users', users_controller_1.getUsers);
userRouter.get('/users/:id', users_controller_1.getUser);
userRouter.put('/users/update/:id', users_controller_1.updateUser);
userRouter.put('/users/updateDiseases/:id', users_controller_1.updateDiseases);
userRouter.delete('/users/:id', users_controller_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=users.routes.js.map