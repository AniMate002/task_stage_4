// imports
import express from "express";
import dotenv from "dotenv";
import { testConnection } from "./db/connectDB.ts";
import cors from "cors";

// routers import
import usersRouter from "./routers/users.router.ts";
import tasksRouter from "./routers/tasks.router.ts";

// application
const app = express();

// configs
dotenv.config();
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// consts
const PORT = process.env.PORT || 8000;

// routers
app.use("/api/users", usersRouter);
app.use("/api/tasks", tasksRouter);

// listen
app.listen(PORT, () => {
    console.log("Server: http://localhost:" + PORT);
    testConnection();
});
