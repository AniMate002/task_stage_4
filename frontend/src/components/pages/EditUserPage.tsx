import React, { useEffect, useState } from 'react';
import EditUserPageTemplate from '../templates/EditUserPageTemplate';
import { useNavigate, useParams } from 'react-router';
import type { User } from '../../types/user.types';
import {
    editUserService,
    fetchSingleUserService,
} from '../../services/users.service';
import BaseRoutes from '../../constants/router.constants';

const EditUserPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { id } = useParams();
    const navigate = useNavigate();

    const handleEditUser = (name: string, email: string, id?: number) => {
        if (!id) return;
        editUserService(name, email, id)
            .then(() => navigate(BaseRoutes.users))
            .catch((error) => alert(error));
    };

    useEffect(() => {
        setIsLoading(true);
        fetchSingleUserService(Number(id))
            .then((res) => setUser(res))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, [id]);

    if (error) return <h1>{error}</h1>;
    if (isLoading || !user) return <h1>Loading</h1>;
    return <EditUserPageTemplate user={user} handleEditUser={handleEditUser} />;
};

export default EditUserPage;
