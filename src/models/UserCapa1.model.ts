import { model, Schema, Document } from 'mongoose';

export interface UserCapa1 {
  _id: string;
  email: string;
  name: string;
  password: string;
  termsAndConditions: Boolean;
  privacyPolicy: Boolean;
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

export default model<UserCapa1 & Document>('UserCapa1', updateUser);
