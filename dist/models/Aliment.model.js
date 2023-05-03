import { Schema, model } from "mongoose";
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
        required: false,
    },
    image: {
        type: String,
        required: false,
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
        type: Array,
        required: true,
    },
});
export default model("Aliment", AlimentsSchema);
//# sourceMappingURL=Aliment.model.js.map