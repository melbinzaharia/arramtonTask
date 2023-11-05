import express from "express";
import { signup,signin,signout} from "../controllers/auth.controller.js";
import { validateSignup  } from "../middleware/signupValidation.js";
import signupValidationRules from "../utils/signupValidationRules.js";
import sanitizeInput from "../middleware/sanitization.js";
const authRouter = express.Router();





authRouter.post('/signup',signupValidationRules(),validateSignup,sanitizeInput(['firstName', 'lastName', 'username', 'email', 'password']),signup);// for signup
authRouter.post('/signin',sanitizeInput([ 'email', 'password']),signin);// for signin
authRouter.get('/signout',signout);// for signout



export default authRouter;