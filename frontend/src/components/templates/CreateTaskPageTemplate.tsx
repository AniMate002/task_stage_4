import React from "react";
import PageControlPanel from "../molecules/PageControlPanel";
import BaseRoutes from "../../constants/router.constants";
import CreateTaskForm from "../molecules/CreateTaskForm";
import type { User } from "../../types/user.types";
import { useNavigate } from "react-router";

interface CreateTaskPageTemplateProps {
    users: Array<User>;
    handleCreateTask: (title: string, userId: number) => void;
}

const CreateTaskPageTemplate: React.FC<CreateTaskPageTemplateProps> = ({
    users,
    handleCreateTask,
}) => {
    const navigate = useNavigate();

    return (
        <div>
            <PageControlPanel
                showIcon={false}
                handleButtonClick={() => navigate(BaseRoutes.home)}
                createItemTitle='see all tasks'
                pageTitle='Create Task'
            />
            <CreateTaskForm users={users} handleCreateTask={handleCreateTask} />
        </div>
    );
};

export default CreateTaskPageTemplate;
