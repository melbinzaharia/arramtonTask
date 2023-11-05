import express from "express";
import { signup,signin } from "../controllers/auth.controller.js";
const authRouter = express.Router();



authRouter.post('/signup', signup);// for signup
authRouter.post("/signin",signin);// for signin



export default authRouter;