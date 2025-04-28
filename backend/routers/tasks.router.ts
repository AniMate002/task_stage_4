import { Router } from "express";
import {
    getAllTasks,
    createTask,
    updateTaskStatus,
    deleteTask,
} from "../controllers/tasks.controller.ts";

const router = Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.patch("/:id", updateTaskStatus);
router.delete("/:id", deleteTask);

export default router;
