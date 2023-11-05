import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
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

// for signin
  export const signin = async (req, res, next) => {
    const { email, password
     } = req.body;
  
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return next(errorHandler(404, "User emailii Not found!"));
      }
      const validPassword = bcrypt.compareSync(password, validUser?.password);
      if (!validPassword) {
        return next(errorHandler(404, "User password incorrect"));
      }
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass,email:em, ...rest } = validUser._doc; // TO RETURN ALL THE THINGS EXCEPT THE PASSWORD AND EMAIL
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }
  };


// for signout
  export const signout = async (req, res, next) => {
    try {
      res.clearCookie('access_token');
      res.status(200).json('User has been logged out!');
    } catch (error) {
      next(error);
    }
  };