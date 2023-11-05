import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

//for signup
export const signup = async (req, res, next) => {
    const { firstname,lastname,username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ firstname,lastname,username, email, password: hashedPassword });
    try {
      await newUser.save();
      res.status(201).json("User Created successfully");
    } catch (error) {
      next(error);
    }
  };