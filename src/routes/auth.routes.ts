import { Router } from "express";
import authController from "../controllers/auth.controller";
const { requiresAuth } = require('express-openid-connect');


const authRouter = Router();

authRouter.post('/signup',requiresAuth(), authController.signUp);

authRouter.post('/signin',requiresAuth(), authController.adminSignIn);

authRouter.post('/login',requiresAuth(), authController.signIn);

authRouter.post('/profile',requiresAuth(), authController.profile)

authRouter.get('/logout',requiresAuth(), authController.logout);

authRouter.put('/update/:id',requiresAuth(), authController.updateUser);

authRouter.delete('/delete',requiresAuth(), authController.deleteUser);

authRouter.post('/me',requiresAuth(), authController.me);

export default authRouter;

