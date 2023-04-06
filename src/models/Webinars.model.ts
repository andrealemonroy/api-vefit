import { model, Schema } from "mongoose";

export interface IWebinars {
  titulo: string;
  link: string;
  responsables: {
    name: string;
    rol: string;
  };
  fechaYHora: string;
}

const webinars = new Schema(
  {
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
  },
);

export default model<IWebinars>("Webinars", webinars);
