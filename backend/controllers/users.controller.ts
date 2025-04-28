import { Request, Response } from "express";
import { User, Task } from "../models/association.model.ts";

export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const allUsers = await User.findAll();
        return res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in getAllUsers controller: ", error);
        return res.status(500).json({ error });
    }
};

export const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email } = req.body;
        if (!name || !email)
            return res.status(400).json({ error: "Name or email is missing" });

        const userWithTheSameEmail = await User.findOne({ where: { email } });
        if (userWithTheSameEmail)
            return res
                .status(400)
                .json({ error: "User with this email already exists" });

        const newUser = await User.create({ name, email });
        return res.status(201).json(newUser);
    } catch (error) {
        console.log("Error in createUser controller: ", error);
        return res.status(500).json({ error });
    }
};

export const getSingleUser = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "Id is missing!" });

        const foundUser = await User.findByPk(id);
        if (!foundUser)
            return res
                .status(404)
                .json({ error: "User with such id not found" });

        return res.status(200).json(foundUser);
    } catch (error) {
        console.log("Error in getSingleUser controller: ", error);
        return res.status(500).json({ error });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "Id is missing!" });

        const foundUser = await User.findByPk(id);
        if (!foundUser)
            return res
                .status(404)
                .json({ error: "User with such id not found" });

        await foundUser.destroy();
        return res.status(200).json({ message: "User successfully deleted" });
    } catch (error) {
        console.log("Error in deleteUser controller: ", error);
        return res.status(500).json({ error });
    }
};

export const editUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        if (!id) return res.status(400).json({ error: "Id is missing!" });
        if (!name && !email)
            return res.status(400).json({
                error: "At least one field (name or email) must be provided!",
            });

        const foundUser = await User.findByPk(id);
        if (!foundUser)
            return res
                .status(404)
                .json({ error: "User with such id not found" });

        if (name) foundUser.set({ name: name.trim() });
        if (email) foundUser.set({ email: email.trim() });

        await foundUser.save();

        return res
            .status(200)
            .json({ message: "User successfully updated", user: foundUser });
    } catch (error) {
        console.log("Error in editUser controller: ", error);
        return res.status(500).json({ error });
    }
};

export const getUserTasks = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const { id } = req.params;

        if (!id) return res.status(400).json({ error: "Id is missing!" });

        const foundUser = await User.findByPk(id);
        if (!foundUser)
            return res
                .status(404)
                .json({ error: "User with such id not found" });

        const tasks = await Task.findAll({ where: { userId: id } });

        return res.status(200).json(tasks);
    } catch (error) {
        console.log("Error in getUserTasks controller: ", error);
        return res.status(500).json({ error });
    }
};
