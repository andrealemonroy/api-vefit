import mongoose from "mongoose";

export async function connectDB() {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database is connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
}
