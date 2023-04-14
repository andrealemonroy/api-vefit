import { model, Schema, Document } from 'mongoose';
import { IDisease } from './Disease.model';

export interface UserI extends Document {
  _id: string;
  email: string;
  name: string;
  password: string;
  birthday?: Date;
  createdAt: Date;
  updatedAt: Date;
  weight?: number;
  height?: number;
  diseases?: IDisease[];
  sub: string
}

const updateUser = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
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
      required: false,
    },
    sub:{
      type: String,
      unique:true,
      required:false
    },
    
  },
  {
    timestamps: true,
  }
);

export default model<UserI & Document>('User', updateUser);
