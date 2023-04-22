import { model, Schema, Document } from "mongoose";
//import diseaseModel, { IDisease } from "../disease.model";
import { ObjectId } from "bson";

interface IDisease{
   name: string;
   description:string
}
export interface ProfileI extends Document {
   _id: string;
   birthday?: Date;
   createdAt: Date;
   updatedAt: Date;
   weight?: number;
   height?: number;
   diseases?: IDisease[];
   complete: boolean;
}


const ProfileSchema = new Schema(
   {
      birthday: {
         type: Date,
         required: false,
      },
      weight: {
         type: Number,
         required: false,
      },
      height: {
         type: Number,
         required: false,
      },
      diseases: [{
         name:{
            type: String,
            unique: true,
            lowercase: true,
         },
         description:{
            type: String,
         },
         
      }],
      complete:{
         type : Boolean,
         default: false,
      }
   },
   {
      timestamps: true,
   }
);

export default model<ProfileI & Document>("Profile", ProfileSchema);
