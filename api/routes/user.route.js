import express from "express";
import { userDetails } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.get('/:id', verifyToken,userDetails);

export default  userRouter;