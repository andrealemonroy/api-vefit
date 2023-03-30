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
import { auth } from 'express-openid-connect';
connectDB()
const { requiresAuth } = require('express-openid-connect');
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
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:4000',
    clientID: '5CBK4ONkI4dHXbIGgSwNsdtLmP6W3iVp',
    issuerBaseURL: 'https://vefit.us.auth0.com'
  };
  
  
  
  // auth router attaches /login, /logout, and /callback routes to the baseURL
  app.use(auth(config));
  
  // req.isAuthenticated is provided from the auth router
  app.get('/', (req: Request, res: Response): void => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });
  
  app.get('/profile', requiresAuth(), (req, res) => {
     res.send(JSON.stringify(req.oidc.user));
  });
