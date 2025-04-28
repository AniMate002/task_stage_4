import React, { useEffect, useState } from "react";
import HomePageTemplate from "../templates/HomePageTemplate";
import {
    changeTaskStatusService,
    deleteTaskService,
    fetchTasksService,
} from "../../services/tasks.service";
import type { Task, TaskStatus } from "../../types/task.types";

const HomePage: React.FC = () => {
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const handleDeleteTask = (id: number) => {
        deleteTaskService(id)
            .then(() => {
                setTasks((prev) => prev.filter((task) => task.id !== id));
            })
            .catch((error) => {
                return alert(error);
            });
    };
    const handleChangeTaskStatus = (taskId: number, newStatus: TaskStatus) => {
        changeTaskStatusService(taskId, newStatus)
            .then(() => {
                setTasks((prev) =>
                    prev.map((task) =>
                        task.id === taskId
                            ? { ...task, status: newStatus }
                            : task
                    )
                );
            })
            .catch((error) => {
                return alert(error);
            });
    };

    useEffect(() => {
        setIsLoading(true);
        fetchTasksService()
            .then((data) => {
                if (Array.isArray(data)) setTasks(data);
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, []);

    if (error) return <h1>{error}</h1>;
    if (isLoading) return <h1>Loading</h1>;
    return (
        <HomePageTemplate
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            handleChangeTaskStatus={handleChangeTaskStatus}
        />
    );
};

export default HomePage;
