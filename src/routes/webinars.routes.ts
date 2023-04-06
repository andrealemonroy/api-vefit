import { Router } from "express";
import * as Webinars from "../controllers/webinars.controller"


const webinarRouter = Router();
webinarRouter.get('/webinar', Webinars.getWebinars);
webinarRouter.get('/webinar/:id', Webinars.getWebinar);
webinarRouter.post('/webinar', Webinars.postWebinar);
webinarRouter.put('/webinar/:id', Webinars.putWebinar);







export default webinarRouter;
