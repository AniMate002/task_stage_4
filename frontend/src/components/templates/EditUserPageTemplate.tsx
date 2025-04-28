import React from "react";
import PageControlPanel from "../molecules/PageControlPanel";
import { useNavigate } from "react-router";
import BaseRoutes from "../../constants/router.constants";
import UserForm from "../molecules/UserForm";
import type { User } from "../../types/user.types";

interface EditUserPageTemplateProps {
    user: User;
    handleEditUser: (name: string, email: string, id?: number) => void;
}

const EditUserPageTemplate: React.FC<EditUserPageTemplateProps> = ({
    user,
    handleEditUser,
}) => {
    const navigate = useNavigate();
    return (
        <div>
            <PageControlPanel
                showIcon={false}
                pageTitle='Edit User'
                createItemTitle='See all users'
                handleButtonClick={() => navigate(BaseRoutes.users)}
            />
            <UserForm onSubmit={handleEditUser} preloadData={user} />
        </div>
    );
};

export default EditUserPageTemplate;
