import Categories from '../models/Categories.model';
import Ingredients from '../models/Ingredient.model';
export const createCategory = async (req, res) => {
    try {
        const category = await Categories.create(req.body);
        return res.json(category);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error creating category',
            error,
        });
    }
};
export const getCategory = async (req, res) => {
    const category = await Categories.find();
    return res.json(category);
};
export const getCategoryByIngredients = async (req, res) => {
    try {
        const name = req.query.name;
        const category = await Categories.findOne({ name }); // Buscar la categoría con su producto por nombre en la base de datos
        if (!category) {
            return res.status(404).json({
                message: `No se encontró una categoría con el nombre "${name}"`,
            });
        }
        const ingredients = await Ingredients.find({
            category: category._id,
        }).populate('category');
        res.json(ingredients);
    }
    catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: 'Error al obtener la categoría de ingredientes' });
    }
};
export const updateCategry = async (req, res) => {
    const category = await Categories.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return res.json(category);
};
export const deleteCategory = async (req, res) => {
    const category = await Categories.findByIdAndDelete(req.params.id);
    console.log(category);
    return res.json(category);
};
//# sourceMappingURL=categories.controller.js.map