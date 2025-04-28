import dotenv from "dotenv";

dotenv.config();

export const dbConfig = {
    database: process.env.DB_NAME || "",
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    host: "localhost",
    dialect: "postgres" as "postgres",
};
