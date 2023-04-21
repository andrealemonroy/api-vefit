import { Router } from "express";
import profileController from "../controllers/profile.controller";



const profileRouter = Router();


profileRouter.post("/users/:idUser/profile", profileController.createProfile)



export default profileRouter