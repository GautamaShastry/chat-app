// main server file
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/messages.js";
import userRoutes from "./routes/users.js";
import connectToMongo from './db/connect.js';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse incoming request with JSON payloads(from req.body)
app.use(cookieParser()); // to parse incoming request with cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes)

// // routes
// app.get('/', (req, res) => {
//     res.send("Server is running...");
// })

app.listen(PORT, () => {
    connectToMongo();
    console.log(`Server is running on port ${PORT}`)
});