import Webinar from "../models/Webinars.model";
export const getWebinars = async (req, res) => {
    const webinars = await Webinar.find();
    res.status(200).json(webinars);
};
export const getWebinar = async (req, res) => {
    const { id } = req.params;
    const webinars = await Webinar.findById(id);
    res.status(200).json(webinars);
};
export const postWebinar = async (req, res) => {
    const { titulo, fechaYHora, link, responsables } = req.body;
    try {
        const newWebinar = await Webinar.create({
            titulo,
            fechaYHora,
            link,
            responsables
        });
        res.status(201).json(newWebinar).send("se genero la reunion correctamente");
    }
    catch (error) {
        res.status(400).send("no se pudo coordinar la reunion");
    }
};
export const putWebinar = async (req, res) => {
    const { id } = req.params;
    const { titulo, fechaYHora, link, responsables } = req.body;
    try {
        const idWebinar = await Webinar.findByIdAndUpdate(id, {
            titulo,
            fechaYHora,
            link,
            responsables
        });
        res.status(201).json(idWebinar);
    }
    catch (error) {
        res.status(400).send("no se pudo modificar la reunion.");
    }
};
export const deleteWebinar = async (req, res) => {
    await Webinar.findByIdAndDelete(req.params.id);
    res.json({ message: 'Healthy Foods deleted' });
};
//# sourceMappingURL=webinars.controller.js.map