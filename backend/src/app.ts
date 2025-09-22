import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/myUserRoutes";

dotenv.config({path: './.env',});

export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = process.env.PORT || 3000;

const mongoURI = process.env.MONGO_URI! || 'mongodb://localhost:27017';

connectDB(mongoURI);
const app = express();

app.use(express.json());
app.use(cors({origin:' * ',credentials:true}));

app.use("/api/my/user", userRouter);

app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));