import Ingredients from "../models/Ingredient.model";
import CategoriesModel from "../models/Categories.model";
export const getIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredients.find().populate("category", {
            name: 1,
            image: 1,
        });
        res.json(ingredients);
    }
    catch (error) {
        console.log(error.message);
    }
};
export const getIngredient = async (req, res) => {
    const ingredient = await Ingredients.findById(req.params.id);
    res.json(ingredient);
};
export const createIngredient = async (req, res) => {
    const { nameIngredient, proteins, sugars, carbohydrates, fats, calories, category, } = req.body;
    console.log(req.body);
    try {
        const categories = await CategoriesModel.findOne({ name: category });
        const ingredient = await Ingredients.create({
            nameIngredient,
            proteins,
            sugars,
            carbohydrates,
            fats,
            calories,
            category: categories._id,
        });
        res.json(ingredient);
    }
    catch (err) {
        throw new Error(err.message);
    }
};
export const updateIngredient = async (req, res) => {
    const ingredient = await Ingredients.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(ingredient);
};
export const deleteIngredient = async (req, res) => {
    await Ingredients.findByIdAndDelete(req.params.id);
    res.json({ message: "Ingredients deleted" });
};
//# sourceMappingURL=ingredients.controller.js.map