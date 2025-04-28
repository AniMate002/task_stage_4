import React from "react";
import TasksWrapper from "../molecules/TasksWrapper";
import { TaskStatuses } from "../../constants/task.constants";
import type { Task, TaskStatus } from "../../types/task.types";

interface TasksGridProps {
    newTasks: Array<Task>;
    inProgressTasks: Array<Task>;
    doneTasks: Array<Task>;
    handleDeleteTask: (id: number) => void;
    handleChangeTaskStatus: (taskId: number, newStatus: TaskStatus) => void;
}

const TasksGrid: React.FC<TasksGridProps> = ({
    newTasks,
    inProgressTasks,
    doneTasks,
    handleDeleteTask,
    handleChangeTaskStatus,
}) => {
    return (
        <div className='flex flex-row w-full justify-between gap-4 mt-4'>
            <TasksWrapper
                handleChangeTaskStatus={handleChangeTaskStatus}
                handleDeleteTask={handleDeleteTask}
                tasks={newTasks}
                status={TaskStatuses.new}
            />
            <TasksWrapper
                handleChangeTaskStatus={handleChangeTaskStatus}
                handleDeleteTask={handleDeleteTask}
                tasks={inProgressTasks}
                status={TaskStatuses.inProgress}
            />
            <TasksWrapper
                handleChangeTaskStatus={handleChangeTaskStatus}
                handleDeleteTask={handleDeleteTask}
                tasks={doneTasks}
                status={TaskStatuses.done}
            />
        </div>
    );
};

export default TasksGrid;
