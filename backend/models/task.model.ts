import Sequelize, { DataTypes } from "sequelize";
import db from "../db/connectDB.ts";
import { TASK_STATUS } from "../constants/task.constants.ts";

const Task = db.define(
    "task",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM(...Object.values(TASK_STATUS)),
            defaultValue: TASK_STATUS.new,
            allowNull: false,
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id",
            },
            onDelete: "CASCADE",
        },
    },
    { timestamps: true }
);

export default Task;
