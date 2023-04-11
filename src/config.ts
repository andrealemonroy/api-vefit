import { config } from "dotenv";
config();
export default {
  jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
  PORT: process.env.PORT,
  DB: {
    URI: process.env.MONGODB_URI || "mongodb://localhost:27017/vefitdb",
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
};