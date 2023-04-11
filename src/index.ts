import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./database";
import userRouter from "./routes/users.routes";
import diseasesRouter from "./routes/diseases.routes";
import authRouter from "./routes/auth.routes";
import alimentsRouter from "./routes/aliments.routes";
import medicalReportRouter from "./routes/medicalReports.routes";
import healthyFoodsRouter from "./routes/healthyFoods.routes";
import ingredientsRouter from "./routes/ingredients.routes";
import { serializarUser, deserializeUser, configPassport } from "./middleware/passportConfig";
import passport from "passport";
import session from "express-session";

serializarUser; // serializa usuario de passport
deserializeUser; // deserializa usuario de passport
configPassport; 

connectDB();

const app = express();
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

app.use(cors());
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

app.listen(port, () => {
   return console.log(`Server is listening on ${port}`);
});

app.use(passport.initialize());
app.use(passport.session());
app.use(authRouter);
app.use(userRouter);
app.use(diseasesRouter);
app.use(alimentsRouter);
app.use(medicalReportRouter);
app.use(healthyFoodsRouter);
app.use(ingredientsRouter);

