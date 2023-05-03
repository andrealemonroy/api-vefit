import { Schema, model } from 'mongoose';
const CategoriesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        require: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
export default model("Category", CategoriesSchema);
//# sourceMappingURL=Categories.model.js.map