import { Schema, model } from "mongoose";

export interface IDisease extends Document {
    name: string;
    description: string;
    symptoms: string;
    causes: string;
    treatments: string;
    image: string;
    createdAt: Date;
}

const DiseasesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    symptoms: {
        type: String,
        required: true,
    },
    causes: {
        type: String,
        required: true,
    },
    treatments: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default model<IDisease>("Disease", DiseasesSchema);