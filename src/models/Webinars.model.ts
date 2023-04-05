import { model, Schema } from "mongoose";

/**
 * 
 Título:

Link:

Responsables:

     Nombre

     Rol

Fecha y hora:
 */

export interface IWebinars {
  titulo: string;
  link: string;
  name: string;
  fechaYHora: Date;
}

const webinars = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    fechaYHora: {
      type: Date,
      required: true,
    },
    link: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IWebinars>("Webinars", webinars);
