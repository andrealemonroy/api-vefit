import { model, Schema, Document } from "mongoose";

export interface User {
    _id: string;
    email: string;
    password: string;
    birthday: Date;
    createdAt: Date;
    updatedAt: Date;
    kindOfFood: string;
    weight: number;
    height: number;
    diseases: Diseases;
    termsAndConditions: boolean;
    policy: boolean;
}

interface Diseases {
    _id: string;
    name: string;
    description: string;
}[]

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    kindOfFood: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    diseases: {
        type: Array,
        required: true,
    },
    termsAndConditions: {
        type: Boolean,
        required: true,
    },
    policy: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true,
});

export default model<User & Document>('User', userSchema);
