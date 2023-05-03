import {Request,Response} from 'express'
import UserCapa1Model from "../models/UserCapa1.model";
import { UserCapa1I } from "../models/UserCapa1.model";

import { handleHtppError } from "../middleware/hadleHtppError";
import { encrypt, compare } from "../middleware/handlePassword";
import  UserCapa1 from "../models/UserCapa1.model";
import {createToken} from "./auth.controller";
import {findUserByEmail} from "./auth.controller";

const jwt = require("jsonwebtoken");

const verifyToken = (req: any, res: any, next: any) => {
   const token = req.headers["x-access-token"];

   if (!token) {
      return res
         .status(403)
         .json({ auth: false, message: "No token provided." });
   }

   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   req.userId = decoded.id;
   next();
};



export const signUp = async (req: any, res: any) => {
    const { name, email, password, termsAndConditions, privacyPolicy } =
       req.body;
 
    const passwordHash = await encrypt(req.body.password); //encrypta la password
    if (!name) {
       return res.status(400).send("El nombre es requerido");
    }
    if (!email) {
       return res.status(400).send("El email es requerido");
    }
    if (!password) {
       return res.status(400).send("La contraseña es requerida");
    }
    try {
       const existingUser = await UserCapa1.findOne({ email });
       if (existingUser) {
          return res.status(400).send("Ya existe un usuario con ese email actualiza tu contraseña.");
       }
       console.log(req.body);
       const user = new UserCapa1({
          name,
          email,
          password: passwordHash,
          termsAndConditions,
          privacyPolicy,
       });
       await user.save();
       const token = createToken(user);
       console.log(token);
       user.set("password", undefined, { strict: false }); //No muestre la password al crear
       res.status(200).json({
          auth: true,
          token,
          message: "Usuario creado con éxito",
          user,
       });
    } catch (error) {
       console.log(error);
       res.status(500).send("Error al crear el usuario");
    }
 };

export const signIn = async (req: any, res: any) => {
   if (!req.body.email || !req.body.password) {
      return res.status(400).send("El email y la contraseña son requeridos");
   }
   try {
      const findUser = await findUserByEmail(req.body.email);
      const hashPassword = await UserCapa1.findOne({ email: req.body.email })

      if (!hashPassword || !findUser) {
         return res.status(404).send("No user found.");
      }
      
      const checkPassword = await compare(
         req.body.password,
         hashPassword.password
      );
        
      findUser.set("password", undefined, { strict: false }); // oculto la password

      if (!checkPassword) {
         handleHtppError(res, "Invalid Password", 401);
         return;
      }
      if (!findUser) {
         return res.status(404).send("No user found.");
      }

      const token = createToken(findUser);

      res.status(200).json({
         auth: true,
         token,
         message: "Bienvenido a tu cuenta",
         user: findUser,
      });
   } catch (error) {
      res.status(500).send("Error al iniciar sesión");
   }
};

export const getUsers = async (req: any, res: any) => {
    const users = await UserCapa1Model.find().populate({path:'profile'}).select('name').select('email').select('profile');
    res.json(users);
}

export const getUser = async (req: any, res: any) => {
    const user = await UserCapa1Model.findById(req.params.id).populate({path:'profile'}).select('name').select('email').select('profile')
    res.json(user);
}

export const deleteUser = async (req: any, res: any) => {
    await UserCapa1Model.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  };

