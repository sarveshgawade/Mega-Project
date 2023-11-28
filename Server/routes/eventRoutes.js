import { Router } from "express";
import {createEvent, removeEvent} from '../controllers/eventController.js'
import { isLoggedIn } from "../middleware/authMiddleware.js";

const router = Router()


// ROUTES
// router.get('/',getAllEvents)
router.post('/create-event',createEvent)
router.delete('/delete-event',removeEvent)
export default router