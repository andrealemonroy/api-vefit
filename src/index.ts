import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./database";
import userRouter from "./routes/users.routes";

import authRouter from "./routes/auth.routes";
import alimentsRouter from "./routes/aliments.routes";
import medicalReportRouter from "./routes/medicalReports.routes";
import recipesRouter from "./routes/recipes.routes";
import ingredientsRouter from "./routes/ingredients.routes";
import categoriesRouter from "./routes/categories.routes";

import {
   serializarUser,
   deserializeUser,
   configPassport,
} from "./middleware/passportConfig";
import passport from "passport";
import session from "express-session";

serializarUser; // serializa usuario de passport
deserializeUser; // deserializa usuario de passport
configPassport;

import webinarRouter from "./routes/webinars.routes";
import profileRouter from "./routes/profile.routes";

import swaggerUi from "swagger-ui-express";
import swaggerSetup from './SwaggerOptions';
import diseasesRouter from "./routes/diseases.routes";


connectDB();

const app = express();
app.use(cors())
const HOUR_IN_MS = 36000;

app.use(
   session({
      secret: process.env.JWT_SECRET || "secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: {
         secure: false, // solo permitir cookies en conexiones HTTPS
         httpOnly: true, // evitar acceso desde el lado del cliente
         maxAge: HOUR_IN_MS, // tiempo de expiración de la cookie
      },
   })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

app.use((_req: Request, res: Response, next: any) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
});

app.use(
   cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
   })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(authRouter);
app.use(userRouter);

app.use(alimentsRouter);
app.use(medicalReportRouter);
app.use(recipesRouter);
app.use(ingredientsRouter);
app.use(categoriesRouter);
app.use(webinarRouter);
app.use(profileRouter);
app.use(diseasesRouter)


app.use("/docs",swaggerUi.serve, swaggerUi.setup(swaggerSetup))

app.listen(port, () => {
   return console.log(`Server is listening on ${port}`);
});
