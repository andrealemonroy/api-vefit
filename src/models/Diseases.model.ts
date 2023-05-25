import { Schema, model } from 'mongoose';

export interface IDiseases extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const DiseasesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<IDiseases>('Diseases', DiseasesSchema);
