
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
          return res.status(400).send("Ya existe un usuario con ese email");
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
    console.log(req.body, "mensaje");
    if (!req.body.email || !req.body.password) {
       return res.status(400).send("El email y la contraseña son requeridos");
    }
    try {
       const findUser = await findUserByEmail(req.body.email);
       console.log(findUser);
       const hashPassword = await UserCapa1.findOne({ email: String }).select(
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