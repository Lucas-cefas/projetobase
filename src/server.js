import express from "express";
import dotenv from "dotenv";
import mainRoutes from './routes/main.js';

dotenv.config();

const server = express();
server.use(express.json());

server.use(mainRoutes);

server.listen(process.env.PORT);