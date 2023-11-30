import { Router } from "express";
import { registerToEvent, unregisterFromEvent } from "../controllers/registerController.js";
import { isLoggedIn } from "../middleware/authMiddleware.js";


const router = Router()

router.post('/register',isLoggedIn,registerToEvent)
router.post('/unregister',isLoggedIn,unregisterFromEvent)


export default router