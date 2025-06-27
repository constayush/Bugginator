import express from 'express';
import { registerUser, loginUser, allUsers } from '../controllers/authController.js';


const router = express.Router();

router.route('/register').post(registerUser);
router.post('/login', loginUser);
router.get('/all', allUsers);
router.get('/me', (req, res) => res.json({name: "ayush"}) );

export default router;