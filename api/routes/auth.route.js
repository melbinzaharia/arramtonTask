import express from "express";
import { signup,signin,signout} from "../controllers/auth.controller.js";
const authRouter = express.Router();



authRouter.post('/signup', signup);// for signup
authRouter.post("/signin",signin);// for signin
authRouter.get("/signout",signout);// for signout



export default authRouter;