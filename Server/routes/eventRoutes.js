import { Router } from "express";
import {createEvent} from '../controllers/eventController.js'
import { isLoggedIn } from "../middleware/authMiddleware.js";

const router = Router()


// ROUTES
// router.get('/',getAllEvents)
router.post('/create-event',createEvent)

export default router