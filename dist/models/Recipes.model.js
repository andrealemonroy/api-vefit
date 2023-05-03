import { Schema, model } from 'mongoose';
const RecipeSchema = new Schema({
    nameFood: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    preparation: {
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
});
export default model('Recipes', RecipeSchema);
//# sourceMappingURL=Recipes.model.js.map