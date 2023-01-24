import express, { Request, Response } from 'express'
import cors from "cors";
import router from './routes/auth.routes';
import { connectDB } from './database';
import userRouter from './routes/users.routes';
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

app.use(router)
app.use(userRouter)

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})
