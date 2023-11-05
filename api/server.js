import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();


//connecting server
const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {
  console.log("Server Is running on port 3000!!");
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