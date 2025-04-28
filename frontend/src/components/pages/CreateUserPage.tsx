import React from "react";
import CreateUserPageTemplate from "../templates/CreateUserPageTemplate";
import { createUserService } from "../../services/users.service";
import { useNavigate } from "react-router";
import BaseRoutes from "../../constants/router.constants";

const CreateUserPage: React.FC = () => {
    const navigate = useNavigate();

    const handleCreateUser = (name: string, email: string) => {
        createUserService(name, email)
            .then(() => {
                navigate(BaseRoutes.users);
            })
            .catch((error) => alert(error));
    };

    return <CreateUserPageTemplate handleCreateUser={handleCreateUser} />;
};

export default CreateUserPage;
