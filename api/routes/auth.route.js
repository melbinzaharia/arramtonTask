import express from "express";
import { signup,signin,signout} from "../controllers/auth.controller.js";
import { validateSignup  } from "../middleware/signupValidation.js";
import signupValidationRules from "../utils/signupValidationRules.js";
const authRouter = express.Router();





authRouter.post('/signup',signupValidationRules(), validateSignup,signup);// for signup
authRouter.post('/signin',signin);// for signin
authRouter.get('/signout',signout);// for signout



export default authRouter;