import { Router } from "express";
import authController from "../controllers/auth.controller";
const { requiresAuth } = require('express-openid-connect');


const authRouter = Router();

authRouter.post('/signup', authController.signUp);

authRouter.post('/signin', authController.adminSignIn);

authRouter.post('/login',requiresAuth(), authController.signIn);

authRouter.post('/profile',requiresAuth(), authController.profile)

authRouter.get('/logout',requiresAuth(), authController.logout);

authRouter.put('/update/:id', authController.updateUser);

authRouter.delete('/delete', authController.deleteUser);

authRouter.post('/me', authController.me);

export default authRouter;

