import Ingredients from "../models/Ingredient.model";
import CategoriesModel from "../models/Categories.model";

export const getIngredients = async (req: any, res: any) => {
   try {
      const ingredients = await Ingredients.find().populate("category", {
         name: 1,
         image: 1,
      });

      res.json(ingredients);
   } catch (error: any) {
      console.log(error.message);
   }
};

export const getIngredient = async (req: any, res: any) => {
   const ingredient = await Ingredients.findById(req.params.id);
   res.json(ingredient);
};

export const createIngredient = async (req: any, res: any) => {
   const {
      nameIngredient,
      proteins,
      sugars,
      carbohydrates,
      fats,
      calories,
      category,
   } = req.body;
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
         category: categories ? categories._id : null,
      });

      res.json(ingredient);
   } catch (err: any) {
      throw new Error(err.message);
   }
};

export const updateIngredient = async (req: any, res: any) => {
   const ingredient = await Ingredients.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
         new: true,
      }
   );
   res.json(ingredient);
};

export const deleteIngredient = async (req: any, res: any) => {
   await Ingredients.findByIdAndDelete(req.params.id);
   res.json({ message: "Ingredients deleted" });
};
