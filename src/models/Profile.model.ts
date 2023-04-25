import { model, Schema, Document } from "mongoose";
//import diseaseModel, { IDisease } from "../disease.model";
import { ObjectId } from "bson";

export interface IDisease{
   name: string;
   description:string
}
export interface ProfileI extends Document {
   _id: string;
   birthday?: String;
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
         type: String,
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
      diseases: {
         type: Array,
         default: []         
      },
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
