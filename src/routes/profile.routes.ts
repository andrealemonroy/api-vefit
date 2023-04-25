import { Router } from "express";
import profileController from "../controllers/profile.controller";



const profileRouter = Router();


profileRouter.post("/users/:idUser/profile", profileController.createProfile)
profileRouter.put("/users/:idUser/profile", profileController.updateProfile)
profileRouter.delete("/users/:idUser/profile/desease", profileController.delteDesease)



export default profileRouter