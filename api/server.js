import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
dotenv.config();// for hiding mongo and jwt keys;


//connecting server
const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(8080, () => {
  console.log("Server Is running on port 8080!!");
});


//connecting database
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("CONNECTED DATABASE");
  })
  .catch((err) => {
    console.log(err);
  });    
  




app.use("/api/auth", authRouter);  //for all authorization purposes 
app.use("/api/user", userRouter);  //for getting user details 

//middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });