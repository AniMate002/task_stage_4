import React, { useEffect, useState } from 'react';
import SingleUserPageTemplate from '../templates/SingleUserPageTemplate';
import { useParams } from 'react-router';
import {
    fetchSingleUserService,
    fetchUserTasksService,
} from '../../services/users.service';
import type { User } from '../../types/user.types';
import type { Task, TaskStatus } from '../../types/task.types';
import {
    changeTaskStatusService,
    deleteTaskService,
} from '../../services/tasks.service';

const SingleUserPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { id } = useParams();

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

        Promise.all([
            fetchSingleUserService(Number(id)),
            fetchUserTasksService(Number(id)),
        ])
            .then(([user, tasks]) => {
                setUser(user);
                setTasks(tasks);
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, [id]);

    if (error) return <h1>{error}</h1>;
    if (isLoading || !user || !tasks) return <h1>Loading</h1>;
    return (
        <SingleUserPageTemplate
            user={user}
            tasks={tasks}
            handleChangeTaskStatus={handleChangeTaskStatus}
            handleDeleteTask={handleDeleteTask}
        />
    );
};

export default SingleUserPage;
