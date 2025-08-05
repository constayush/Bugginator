import express from 'express';
import { registerUser, loginUser, getCurrentUser, logoutUser } from '../controllers/authController.js';
import { authenticateUser } from '../middlewares/authenticateUser.js';
import validateRefreshToken from '../middlewares/validateRefreshToken.js';
const router = express.Router();

router.route('/register').post(registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/me' ,authenticateUser, getCurrentUser );
// router.get('/refesh-token', validateRefreshToken, generateAccessToken);
export default router;