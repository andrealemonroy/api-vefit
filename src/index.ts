import express, { Request, Response } from 'express'
import cors from "cors";
import { connectDB } from './database';
import userRouter from './routes/users.routes';
import diseasesRouter from './routes/diseases.routes';
import authRouter from './routes/auth.routes';
import alimentsRouter from './routes/aliments.routes';
import medicalReportRouter from './routes/medicalReports.routes';
import healthyFoodsRouter from './routes/healthyFoods.routes';
import ingredientsRouter from './routes/ingredients.routes';
connectDB()
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
    
const port = process.env.PORT || 8080

app.use((_req: Request, res: Response, next: any) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
)

app.use(authRouter)
app.use(userRouter)
app.use(diseasesRouter)
app.use(alimentsRouter)
app.use(medicalReportRouter)
app.use(healthyFoodsRouter)
app.use(ingredientsRouter)
app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})
