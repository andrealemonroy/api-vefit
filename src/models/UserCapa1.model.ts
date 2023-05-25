import { model, Schema, Document } from 'mongoose';
import { ProfileI } from './Profile.model';


export interface UserCapa1I extends Document  {
  _id: string;
  email: string;
  name: string;
  password: string;
  sub: string;
  termsAndConditions: Boolean;
  privacyPolicy: Boolean;
  profile: ProfileI;
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
      default: true,
    },
    privacyPolicy: {
      type: Boolean,
      required: true,
      default: true,
    },
    sub: {
      type: String,
      required: false,
    },
    profile:{
      type: Schema.Types.ObjectId,
      ref: 'Profile',     
    }
  },
  {
    timestamps: true,
  }
);

export default model<UserCapa1I & Document>('UserCapa1', updateUser);
