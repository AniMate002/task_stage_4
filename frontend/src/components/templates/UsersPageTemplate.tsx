import React from "react";
import PageControlPanel from "../molecules/PageControlPanel";
import { useNavigate } from "react-router";
import BaseRoutes from "../../constants/router.constants";
import type { User } from "../../types/user.types";
import UsersGrid from "../organisms/UsersGrid";

interface UsersPageTemplateProps {
    users: Array<User>;
    handleDeleteUser: (userId: number) => void;
}

const UsersPageTemplate: React.FC<UsersPageTemplateProps> = ({
    users,
    handleDeleteUser,
}) => {
    const navigate = useNavigate();

    return (
        <div>
            <PageControlPanel
                pageTitle='Users'
                createItemTitle='Create User'
                showIcon
                handleButtonClick={() => navigate(BaseRoutes.createUser)}
            />
            <UsersGrid users={users} handleDeleteUser={handleDeleteUser} />
        </div>
    );
};

export default UsersPageTemplate;
