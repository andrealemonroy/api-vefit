import { Schema, model } from "mongoose";


export interface IAliment extends Document {
    _id: string;
    name: string;
    description: string;
    source: string;
    characteristics: string;
    benefits: string;
    recommendations: string;
    price: number;
    image: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
    canBeReplacedBy: string[];
}

const AlimentsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    characteristics: {
        type: String,
        required: true,
    },
    benefits: {
        type: String,
        required: true,
    },
    recommendations: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    canBeReplacedBy: {
        type: [String],
        required: true,
    },
});

export default model<IAliment>("Aliment", AlimentsSchema);
