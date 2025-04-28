import React, { useEffect, useState } from "react";
import type { User } from "../../types/user.types";
import {
    deleteUserService,
    fetchUserService,
} from "../../services/users.service";
import UsersPageTemplate from "../templates/UsersPageTemplate";

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<Array<User>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDeleteUser = (userId: number) => {
        deleteUserService(userId)
            .then(() => {
                setUsers((prev) => prev.filter((user) => user.id !== userId));
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
        <UsersPageTemplate users={users} handleDeleteUser={handleDeleteUser} />
    );
};

export default UsersPage;
