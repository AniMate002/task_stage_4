import React from "react";
import PageControlPanel from "../molecules/PageControlPanel";
import BaseRoutes from "../../constants/router.constants";
import TasksGrid from "../organisms/TasksGrid";
import type { Task, TaskStatus } from "../../types/task.types";
import { useFilterTasks } from "../../hooks/useFilterTasks";
import { useNavigate } from "react-router";

interface HomePageTemplateProps {
    tasks: Array<Task>;
    handleDeleteTask: (id: number) => void;
    handleChangeTaskStatus: (taskId: number, newStatus: TaskStatus) => void;
}

const HomePageTemplate: React.FC<HomePageTemplateProps> = ({
    tasks,
    handleDeleteTask,
    handleChangeTaskStatus,
}) => {
    const filteredTasks = useFilterTasks(tasks);
    const navigate = useNavigate();

    return (
        <div>
            <PageControlPanel
                showIcon
                pageTitle='Tasks'
                handleButtonClick={() => navigate(BaseRoutes.createTask)}
                createItemTitle='Create task'
            />
            <TasksGrid
                {...filteredTasks}
                handleDeleteTask={handleDeleteTask}
                handleChangeTaskStatus={handleChangeTaskStatus}
            />
        </div>
    );
};

export default HomePageTemplate;
