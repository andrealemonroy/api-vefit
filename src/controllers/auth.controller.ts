import { Collection } from "mongoose";
import SignUpUser from "../models/SignUpUser.model";
import User, { UserI } from "../models/User.model";
import { handleHtppError } from "../utils/handleHtppError";
import { encrypt, compare } from "../utils/handlePassword";
import passport from "passport";
import { Request, Response } from "express";
import qs from "qs";
import { configPassport } from "../middleware/passportConfig";
require("dotenv").config();
const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, LOCAL_HOST } = process.env;
configPassport; // configuracion passport

const jwt = require("jsonwebtoken");

const createToken = (user: any) => {
   console.log("createToken", process.env.JWT_SECRET);
   return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 1000, // 24 hours
   });
};

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

const findAdminByEmail = async (email: string) => {
   return await SignUpUser.findOne({ email });
};

const findUserByEmail = async (email: string) => {
   return await User.findOne({ email: email });
};

const adminSignIn = async (req: any, res: any) => {
   if (!req.body.email || !req.body.password) {
      return res.status(400).send("El email y la contraseña son requeridos");
   }
   try {
      console.log(req.body.email);
      const findUser = await findAdminByEmail(req.body.email);
      if (!findUser) {
         return res.status(404).send("No user found.");
      }
      if (findUser?.password !== req.body.password) {
         return res.status(401).json({
            auth: false,
            token: null,
            message: "Contraseña incorrecta",
         });
      }
      const token = createToken(findUser);
      res.status(200).json({
         auth: true,
         token,
         message: "Bienvenido a tu cuenta",
         user: findUser,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send("Error al iniciar sesión");
   }
};

const signIn = async (req: any, res: any) => {
   console.log(req.body, "mensaje");
   if (!req.body.email || !req.body.password) {
      return res.status(400).send("El email y la contraseña son requeridos");
   }
   try {
      const findUser = await findUserByEmail(req.body.email);
      console.log(findUser);
      const hashPassword = await User.findOne({ email: String }).select(
         "password"
      );
      console.log(findUser, "findUser");
      const checkPassword = await compare(
         req.body.password,
         hashPassword.password
      );
      findUser.set("password", undefined, { strict: false }); // oculto la password
      console.log(findUser.password, "escondela");
      if (!checkPassword) {
         handleHtppError(res, "Invalid Password", 401);
         return;
      }
      if (!findUser) {
         return res.status(404).send("No user found.");
      }
      console.log(findUser?.password, req.body.password);
      if (findUser?.password != req.body.password) {
         return res.status(401).json({
            auth: false,
            token: null,
            message: "Contraseña incorrecta",
         });
      }

      const token = createToken(findUser);

      res.status(200).json({
         auth: true,
         token,
         message: "Bienvenido a tu cuenta",
         user: findUser,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send("Error al iniciar sesión");
   }
};

const signUp = async (req: any, res: any) => {
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
      const existingUser = await User.findOne({ email });
      if (existingUser) {
         return res.status(400).send("Ya existe un usuario con ese email");
      }
      console.log(req.body);
      const user = new User({
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

// const profile = async (req: any, res: any) => {

//    console.log(req);
//    const user = await SignUpUser.findById(req.userId, { password: 0 });

//    if (!user) {
//       return res.status(404).send("No user found.");
//    }
//    res.status(200).json(user);
// };

const login = passport.authenticate("auth0", { scope: "openid profile email" }); // usa la estartegia definida para el login definida en passport

const callback = (req: Request, res: Response, next: any) => {
   // callback maneja la respuesta de autenticaciones

   passport.authenticate("auth0", (err: any, user: any, _info: any) => {
      if (err) {
         return next(err);
      }
      if (!user) {
         return res.redirect("/login");
      }

      req.logIn(user, (err: any) => {
         if (err) {
            return next(err);
         }

         res.redirect("/profile");
      });
   })(req, res, next);
};

const profile = async (req: any, res:any, next: any) => {
   const {email}= req.user;
   try {
      
      const user: UserI = await User.findOne({email: email})
      return res.json(user);
   } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message});
   }
};

const logout = (req: any, res: any, next: (arg0: any) => any) => {
   let params = {
      client_id: AUTH0_CLIENT_ID,
      returnTo: LOCAL_HOST,
   };
   req.logout(function (err: any) {
      if (err) {
         return next(err);
      }
      // console.log(req);
      req.session.destroy((err: any) => {
         res.clearCookie("connect.sid");
         res.redirect(
            `https://${AUTH0_DOMAIN}/oidc/logout?get_logout_redirect_uri= ${qs.stringify(
               params
            )}`
         );
      });
   });
};

const updateUser = async (req: any, res: any) => {
   const user = await User.findById(req.params.id);

   if (!user) {
      return res.status(404).send("No user found.");
   }
   const token = createToken(user);
   res.status(200).json({ auth: true, token });
};

const deleteUser = async (req: any, res: any) => {
   const user = await User.findByIdAndDelete(req.userId);
   if (!user) {
      return res.status(404).send("No user found.");
   }
   res.status(200).json({ auth: false, token: null });
};

const me = async (req: { token: string }, res: any) => {
   const token = req.token;
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   const user = await User.findById(decoded.id);
   res.json(user);
};

export default {
   adminSignIn,
   signIn,
   signUp,
   //profile,
   logout,
   updateUser,
   deleteUser,
   verifyToken,
   me,
   callback,
   login,
   profile,
};
