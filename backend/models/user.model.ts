import Sequelize from "sequelize";
import db from "../db/connectDB.ts";

const User = db.define(
    "user",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [2, 50],
            },
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [5, 100],
                isEmail: true,
            },
        },
    },
    { timestamps: true }
);

export default User;
