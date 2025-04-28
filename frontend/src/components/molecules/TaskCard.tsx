import React from "react";
import type { Task, TaskStatus } from "../../types/task.types";
import { FaRegTrashAlt } from "react-icons/fa";
import ChangeStatusButton from "../atoms/ChangeStatusButton";
import { TaskStatuses } from "../../constants/task.constants";

interface TaskCard extends Task {
    handleDeleteTask: (id: number) => void;
    handleChangeTaskStatus: (taskId: number, newStatus: TaskStatus) => void;
}

const TaskCard: React.FC<TaskCard> = ({
    title,
    user,
    status,
    id,
    handleDeleteTask,
    handleChangeTaskStatus,
}) => {
    const nextStatus =
        status === TaskStatuses.new
            ? TaskStatuses.inProgress
            : status === TaskStatuses.inProgress
            ? TaskStatuses.done
            : TaskStatuses.new;
    return (
        <div className='w-full flex gap-2 flex-col justify-between  bg-white border border-stone-200 rounded-lg p-4'>
            <div className='flex items-center justify-between'>
                <p className='text-md montserrat-font-normal text-stone-700'>
                    {title}
                </p>
                <button
                    onClick={() => handleDeleteTask(id)}
                    className='cursor-pointer active:scale-[0.8] transition duration-[0.2s]'
                >
                    <FaRegTrashAlt color='red' />
                </button>
            </div>
            <p className='text-sm montserrat-font-light'>
                Assigned to: {user.name}
            </p>
            <ChangeStatusButton
                onClick={() => handleChangeTaskStatus(id, nextStatus)}
            >
                Move to {nextStatus}
            </ChangeStatusButton>
        </div>
    );
};

export default TaskCard;
