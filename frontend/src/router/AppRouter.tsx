import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from '../components/pages/HomePage';
import Layout from '../components/templates/Layout';
import BaseRoutes from '../constants/router.constants';
import CreateTaskPage from '../components/pages/CreateTaskPage';
import UsersPage from '../components/pages/UsersPage';
import CreateUserPage from '../components/pages/CreateUserPage';
import EditUserPage from '../components/pages/EditUserPage';
import SingleUserPage from '../components/pages/SingleUserPage';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path={BaseRoutes.home} element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path={BaseRoutes.createTask}
                    element={<CreateTaskPage />}
                />
                <Route path={BaseRoutes.users} element={<UsersPage />} />
                <Route
                    path={BaseRoutes.createUser}
                    element={<CreateUserPage />}
                />
                <Route
                    path={BaseRoutes.singleUser(':id')}
                    element={<SingleUserPage />}
                />
                <Route
                    path={BaseRoutes.editUser(':id')}
                    element={<EditUserPage />}
                />
            </Route>
        </Routes>
    );
};

export default AppRouter;
