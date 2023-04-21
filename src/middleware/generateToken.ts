
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserCapa1I } from "../models/UserCapa1.model";
// import UserCapa1Model ,{ UserI } from "../models/User.model";


export const generateToken = (user: UserCapa1I) => {
    const token = jwt.sign(
      {
        sub: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET || "secret-key",
      {
        expiresIn: "1h",
      }
    );
    return token;
  };

  export const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  };