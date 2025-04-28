import type { Task } from "../types/task.types";
import { TaskStatuses } from "../constants/task.constants";

export const useFilterTasks = (tasks: Array<Task>) => {
    const newTasks = tasks.filter((task) => task.status === TaskStatuses.new);
    const inProgressTasks = tasks.filter(
        (task) => task.status === TaskStatuses.inProgress
    );
    const doneTasks = tasks.filter((task) => task.status === TaskStatuses.done);

    return { newTasks, inProgressTasks, doneTasks };
};
