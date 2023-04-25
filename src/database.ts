import mongoose from "mongoose";
import config from "./config";
export async function connectDB() {
  try {
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(config.DB.URI || "");
    console.log("Database is connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
}
