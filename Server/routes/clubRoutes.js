import {Router} from 'express'

import { createClub,removeClub,getAllClubs, } from "../controllers/clubsController.js";
import {isLoggedIn,authorizedRoles} from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';
import eventRoutes from './eventRoutes.js'

const router = Router();


// ROUTES
router.get('/',getAllClubs)
router.post('/create-club',isLoggedIn,authorizedRoles('ADMIN'),upload.single('thumbnail'),createClub)
router.delete('/:id',isLoggedIn,authorizedRoles('ADMIN'),removeClub)
router.use('/events',eventRoutes)

export default router;