import express from "express";
import dotenv from "dotenv";
import authenticationRoute from "./routes/authenticationRoute.js";
import { connectDb } from "./models/connectionDb.js";
const app = express();

dotenv.config();

const port = process.env.PORT || 8000;

connectDb();

app.use(express.json());
app.use("/auth",authenticationRoute);

app.listen(port,()=>{
    console.log(`Auth server listining in port ${port}`)
})