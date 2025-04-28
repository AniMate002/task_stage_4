import { Request, Response } from "express";
import { User, Task } from "../models/association.model.ts";
import { TASK_STATUS } from "../constants/task.constants.ts";

export const getAllTasks = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const tasks = await Task.findAll({
            include: [
                {
                    model: User,
                    attributes: ["id", "name", "email"],
                },
            ],
        });

        return res.status(200).json(tasks);
    } catch (error) {
        console.log("Error in getAllTasks controller: ", error);
        return res.status(500).json({ error });
    }
};

export const createTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const { title, userId } = req.body;
        const user = await User.findByPk(userId);

        if (!title.trim())
            return res.status(400).json({ error: "Title is missing!" });
        if (!user)
            return res
                .status(401)
                .json({ error: "User with such Id doesn't exist!" });

        const newTask = await Task.create({ title: title.trim(), userId });

        return res.status(200).json(newTask);
    } catch (error) {
        console.log("Error in createTask controller: ", error);
        return res.status(500).json({ error });
    }
};

export const updateTaskStatus = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const { id } = req.params;
        const { newStatus } = req.body;
        const foundTask = await Task.findByPk(id);

        if (!id) return res.status(400).json({ error: "Task Id is missing!" });
        if (!Object.values(TASK_STATUS).includes(newStatus))
            return res.status(400).json({ error: "Invalid task status!" });

        if (!foundTask)
            return res.status(404).json({ error: "Task not found!" });

        foundTask.set({ status: newStatus });
        await foundTask.save();

        return res.status(200).json({
            message: "Task status updated successfully",
            task: foundTask,
        });
    } catch (error) {
        console.log("Error in updateTaskStatus controller: ", error);
        return res.status(500).json({ error });
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const foundTask = await Task.findByPk(id);

        if (!id) return res.status(400).json({ error: "Task Id is missing!" });
        if (!foundTask)
            return res.status(404).json({ error: "Task not found!" });

        await foundTask.destroy();

        return res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.log("Error in deleteTask controller: ", error);
        return res.status(500).json({ error });
    }
};
