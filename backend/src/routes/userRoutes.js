import express from "express";
import {authenticateUser} from "../middlewares/authenticateUser.js";
import { getCurrentUser } from "../controllers/userController.js";
// import { updateCurrentUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", getCurrentUser);

// router.patch('/:id', updateCurrentUser);

export default router;