import { model, Schema } from "mongoose";
const webinars = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    fechaYHora: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    responsables: {
        nombre: String,
        rol: String,
    },
});
export default model("Webinars", webinars);
//# sourceMappingURL=Webinars.model.js.map