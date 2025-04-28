import React, { useEffect, useState } from "react";
import CreateTaskPageTemplate from "../templates/CreateTaskPageTemplate";
import type { User } from "../../types/user.types";
import { fetchUserService } from "../../services/users.service";
import { createTaskService } from "../../services/tasks.service";
import { useNavigate } from "react-router";
import BaseRoutes from "../../constants/router.constants";

const CreateTaskPage: React.FC = () => {
    const [users, setUsers] = useState<Array<User>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleCreateTask = (title: string, userId: number) => {
        if (!title.trim() || !userId) return;
        createTaskService(title.trim(), userId)
            .then(() => {
                navigate(BaseRoutes.home);
            })
            .catch((error) => alert(error));
    };

    useEffect(() => {
        setIsLoading(true);
        fetchUserService()
            .then((res) => setUsers(res))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, []);

    if (error) return <h1>{error}</h1>;
    if (isLoading) return <h1>Loading</h1>;
    return (
        <CreateTaskPageTemplate
            users={users}
            handleCreateTask={handleCreateTask}
        />
    );
};

export default CreateTaskPage;
