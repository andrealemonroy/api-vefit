import { Router } from "express";
import authController from "../controllers/auth.controller";

const router = Router();

router.post('/signup', authController.signUp);

router.post('/signin', authController.signIn);

router.get('/profile', authController.profile);

router.get('/logout', authController.logout);

router.put('/update', authController.updateUser);

router.delete('/delete', authController.deleteUser);

export default router;

