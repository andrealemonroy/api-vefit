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
  typeOfFood?: string;
  weight?: number;
  height?: number;
  diseases?: IDisease[];
  termsAndConditions: boolean;
  privacyPolicy: boolean;
  comparePassword: (password: string, receivedPassword: string) => Promise<boolean>;
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
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    birthday: {
      type: Date,
      required: false,
    },
    kindOfFood: {
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
      required: false,
    },
    termsAndConditions: {
      type: Boolean,
      required: true,
      default: false,
    },
    privacyPolicy: {
      type: Boolean,
      required: true,
      default: false,
    },
    sub:{
      type:String,
      require:false,
      unique: true,
      
    }
  },
  {
    timestamps: true,
  }
);

export default model<UserI & Document>('User', updateUser);
