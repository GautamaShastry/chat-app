// main server file
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.js";
import connectToMongo from './db/connect.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

 // to parse incoming request with JSON payloads(from req.body)

// // routes
// app.get('/', (req, res) => {
//     res.send("Server is running...");
// })

app.listen(PORT, () => {
    connectToMongo();
    console.log(`Server is running on port ${PORT}`)
});