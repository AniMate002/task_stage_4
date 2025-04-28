import React from "react";
import type { Task, TaskStatus } from "../../types/task.types";
import { useStatusColor } from "../../hooks/useStatusColor";
import TaskCard from "./TaskCard";

interface TasksWrapperProps {
    status: TaskStatus;
    tasks: Array<Task>;
    handleChangeTaskStatus: (taskId: number, newStatus: TaskStatus) => void;
    handleDeleteTask: (id: number) => void;
}

const TasksWrapper: React.FC<TasksWrapperProps> = ({
    status,
    tasks,
    handleDeleteTask,
    handleChangeTaskStatus,
}) => {
    const { fontColor, bgColor } = useStatusColor(status);
    const renderedTasks = tasks.map((task) => (
        <TaskCard
            handleChangeTaskStatus={handleChangeTaskStatus}
            handleDeleteTask={handleDeleteTask}
            key={task.id.toString()}
            {...task}
        />
    ));
    return (
        <div
            style={{
                backgroundColor: bgColor,
                borderWidth: 2,
                borderColor: fontColor,
            }}
            className='rounded-xl w-full flex flex-col gap-4 p-4'
        >
            <h1 style={{ color: fontColor }} className='uppercase'>
                {status}
            </h1>
            {tasks.length === 0 ? (
                <p className='text-stone-600 font-light text-sm'>No tasks</p>
            ) : (
                renderedTasks
            )}
        </div>
    );
};

export default TasksWrapper;
