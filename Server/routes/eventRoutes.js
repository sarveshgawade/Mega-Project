import { Router } from "express";
import {createEvent, getAllEvents, removeEvent} from '../controllers/eventController.js'
import { authorizedRoles, isLoggedIn } from "../middleware/authMiddleware.js";

const router = Router()


// ROUTES
router.get('/',getAllEvents)
router.post('/create-event',isLoggedIn,authorizedRoles('ADMIN'),createEvent)
router.delete('/delete-event',isLoggedIn,authorizedRoles('ADMIN'),removeEvent)


export default router