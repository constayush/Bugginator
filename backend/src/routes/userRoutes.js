import express from "express";

import { getCurrentUser } from "../controllers/userController.js";
import { updateCurrentUser } from "../controllers/userController.js";

const router = express.Router();

router.route('/me').get(getCurrentUser);
router.patch('/:id', updateCurrentUser);

export default router;