import { model, Schema, Document } from "mongoose";
//import diseaseModel, { IDisease } from "../disease.model";
import { ObjectId } from "bson";

export interface ProfileI extends Document {
   _id: string;
   birthday?: Date;
   createdAt: Date;
   updatedAt: Date;
   weight?: number;
   height?: number;
   diseases?: object[];
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
