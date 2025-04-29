import React from 'react';
import PageControlPanel from '../molecules/PageControlPanel';
import { useNavigate } from 'react-router';
import BaseRoutes from '../../constants/router.constants';
import UserForm from '../molecules/UserForm';

interface CreateUserPageTemplateProps {
    handleCreateUser: (name: string, email: string) => void;
}

const CreateUserPageTemplate: React.FC<CreateUserPageTemplateProps> = ({
    handleCreateUser,
}) => {
    const navigate = useNavigate();

    return (
        <div>
            <PageControlPanel
                showIcon={false}
                pageTitle="Create User"
                createItemTitle="See all users"
                handleButtonClick={() => navigate(BaseRoutes.users)}
            />

            <UserForm onSubmit={handleCreateUser} />
        </div>
    );
};

export default CreateUserPageTemplate;
