import React from "react";
import type { User } from "../../types/user.types";
import UserCardInTaskForm from "../molecules/UserCardInTaskForm";

interface UsersTaskFormGridProps {
    users: Array<User>;
    activeUser: number;
    changeActiveUser: React.Dispatch<React.SetStateAction<number>>;
}

const UsersTaskFormGrid: React.FC<UsersTaskFormGridProps> = ({
    users,
    activeUser,
    changeActiveUser,
}) => {
    const renderedUsers = users.map((user) => (
        <UserCardInTaskForm
            changeActiveUser={changeActiveUser}
            isActive={activeUser === user.id}
            key={user.id.toString()}
            user={user}
        />
    ));
    return (
        <div className='flex items-center justify-between flex-wrap mt-2'>
            {renderedUsers}
        </div>
    );
};

export default UsersTaskFormGrid;
