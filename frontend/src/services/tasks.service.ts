import type { Task, TaskStatus } from "../types/task.types";

export const fetchTasksService = async (): Promise<Array<Task>> => {
    try {
        const res = await fetch("/api/tasks");
        // if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        if ("error" in data) throw new Error(data.error);
        console.log(data);
        return data;
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error!";
        console.log("Error at fetchTasksService: ", error);
        throw new Error(errorMessage);
    }
};

export const deleteTaskService = async (
    taskId: number
): Promise<{ message: string }> => {
    try {
        const res = await fetch(`/api/tasks/${taskId}`, {
            method: "DELETE",
        });
        // if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        if ("error" in data) throw new Error(data.error);
        return data;
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error!";
        console.log("Error at deleteTaskService: ", error);
        throw new Error(errorMessage);
    }
};

export const changeTaskStatusService = async (
    taskId: number,
    newStatus: TaskStatus
): Promise<{ message: string; task: Task }> => {
    try {
        const res = await fetch(`/api/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newStatus }),
        });

        // if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        if ("error" in data) throw new Error(data.error);
        return data;
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error!";
        console.log("Error at changeTaskStatusService: ", error);
        throw new Error(errorMessage);
    }
};

export const createTaskService = async (
    title: string,
    userId: number
): Promise<Task | string> => {
    try {
        const res = await fetch("/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, userId }),
        });
        const data = await res.json();
        if ("error" in data) throw new Error(data.error);
        return data;
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error!";
        console.log("Error at createTaskService: ", error);
        throw new Error(errorMessage);
    }
};
