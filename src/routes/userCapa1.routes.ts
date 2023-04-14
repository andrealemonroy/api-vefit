import { Router } from "express";
import {signIn, signUp} from "../controllers/userCapa1";
const userCapa1 = Router();


userCapa1.post('/signIn', signIn);
userCapa1.post('/signUp', signUp);


export default userCapa1;