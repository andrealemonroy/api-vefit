import { Router } from "express";
import { getUser, getUsers,  deleteUser, updateUser,updateDiseases} from "../controllers/users.controller";
const userRouter = Router();

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);
userRouter.put('/users/update/:id', updateUser);
userRouter.put('/users/updateDiseases/:id', updateDiseases);
userRouter.delete('/users/:id',deleteUser);

export default userRouter;
