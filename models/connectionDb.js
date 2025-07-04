import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectDb = async()=>{
    const mongoURL = process.env.MONGO_URL
    try{
        mongoose.connect(mongoURL).then(()=>{
            console.log("Mongodb connection established succesfully");
        })
    }
    catch(error){
        throw(error);
    }
}
