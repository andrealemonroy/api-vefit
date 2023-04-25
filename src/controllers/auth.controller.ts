import { handleHtppError } from "../middleware/hadleHtppError";
import { encrypt, compare } from "../middleware/handlePassword";
import passport from "passport";
import { Request, Response } from "express";
import qs from "qs";
import { configPassport } from "../middleware/passportConfig";
import UserCapa1, { UserCapa1I } from "../models/UserCapa1.model";
import UserCapa1Model from "../models/UserCapa1.model";
require("dotenv").config();
const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, LOCAL_HOST } = process.env;
configPassport; // configuracion passport

const jwt = require("jsonwebtoken");

export const createToken = (user: any) => {
   console.log("createToken", process.env.JWT_SECRET);
   return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 1000, // 24 hours
   });
};

const verifyToken = (req: any, res: Response, next: any) => {
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
   return await UserCapa1Model.findOne({ email });
};

export const findUserByEmail = async (email: string) => {
   return await UserCapa1Model.findOne({ email: email });
};

const adminSignIn = async (req: Request, res: Response) => {
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

         res.redirect("/profileTem");
      });
   })(req, res, next);
};

const profile = async (req: any, res: any, next: any) => {
   const { email } = req.user;
   try {
      const user: UserCapa1I = await UserCapa1.findOne({ email: email });
      return res.json(user);
   } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
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

const me = async (req: { token: string }, res: any) => {
   const token = req.token;
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   const user = await UserCapa1.findById(decoded.id);
   res.json(user);
};

export default {
   adminSignIn,   
   logout,  
   verifyToken,
   me,
   callback,
   login,
   profile,
};
