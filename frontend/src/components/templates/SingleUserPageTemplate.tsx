import React from 'react';
import type { User } from '../../types/user.types';
import PageControlPanel from '../molecules/PageControlPanel';
import { useNavigate } from 'react-router';
import BaseRoutes from '../../constants/router.constants';
import UserInfo from '../molecules/UserInfo';
import type { Task, TaskStatus } from '../../types/task.types';
import { useFilterTasks } from '../../hooks/useFilterTasks';
import TasksGrid from '../organisms/TasksGrid';

interface SingleUserPageTemplateProps {
    user: User;
    tasks: Array<Task>;
    handleChangeTaskStatus: (taskId: number, newStatus: TaskStatus) => void;
    handleDeleteTask: (id: number) => void;
}

const SingleUserPageTemplate: React.FC<SingleUserPageTemplateProps> = ({
    user,
    tasks,
    handleChangeTaskStatus,
    handleDeleteTask,
}) => {
    const navigate = useNavigate();
    const filteredTasks = useFilterTasks(tasks);

    return (
        <div>
            <PageControlPanel
                pageTitle="User Profile"
                createItemTitle="Edit User"
                showIcon={false}
                handleButtonClick={() => navigate(BaseRoutes.editUser(user.id))}
            />

            <UserInfo {...user} />

            <TasksGrid
                {...filteredTasks}
                handleChangeTaskStatus={handleChangeTaskStatus}
                handleDeleteTask={handleDeleteTask}
            />
        </div>
    );
};

export default SingleUserPageTemplate;
