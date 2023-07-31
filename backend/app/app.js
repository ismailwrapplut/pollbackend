import express from "express";
import dbConnect from "../config/dbConnect.js";
import userRoutes from "../routes/userRoutes.js";
import pollRoutes from "../routes/pollRoutes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
dbConnect();
//userRoutes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/polls", pollRoutes);
export default app;
