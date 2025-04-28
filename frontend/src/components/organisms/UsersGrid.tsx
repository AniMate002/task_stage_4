import React from "react";
import type { User } from "../../types/user.types";
import UserCard from "../molecules/UserCard";

interface UsersGridProps {
    users: Array<User>;
    handleDeleteUser: (userId: number) => void;
}

const UsersGrid: React.FC<UsersGridProps> = ({ users, handleDeleteUser }) => {
    const renderedUsers = users.map((user) => (
        <UserCard
            user={user}
            key={user.id.toString()}
            handleDeleteUser={handleDeleteUser}
        />
    ));
    return <div className='flex flex-wrap gap-4 mt-4'>{renderedUsers}</div>;
};

export default UsersGrid;
