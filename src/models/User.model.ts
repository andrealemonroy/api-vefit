import { model, Schema, Document } from 'mongoose';
import { IDisease } from './disease.model';

export interface User {
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
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: false,
    },
    typeOfFood: {
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
    },
    privacyPolicy: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<User & Document>('User', updateUser);
