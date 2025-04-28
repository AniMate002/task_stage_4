import { Router } from "express";
import {
    getAllUsers,
    createUser,
    getSingleUser,
    deleteUser,
    editUser,
    getUserTasks,
} from "../controllers/users.controller.ts";

const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getSingleUser);
router.patch("/:id", editUser);
router.delete("/:id", deleteUser);
router.get("/:id/tasks", getUserTasks);

export default router;
