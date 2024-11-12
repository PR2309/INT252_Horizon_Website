import express from 'express';
import {registerController, loginController, testController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

// router object
const router = express.Router();

// routing 
// REGISTER || METHOD POST
router.post('/register',registerController);

// LOGIN || METHOD POST
router.post('/login',loginController);

// test route
router.get('/test',requireSignIn,isAdmin,testController);



// middleware function to check for authentication
// router.use((req, res, next) => {
//     if (req.session && req.session.user) {
//         next();
//         } else {
//             res.redirect('/login');
//             }
//             });






export default router;