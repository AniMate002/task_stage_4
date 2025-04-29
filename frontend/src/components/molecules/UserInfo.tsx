import React from 'react';
import type { User } from '../../types/user.types';

interface UserInfoProps extends User {}

const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => {
    return (
        <div className="mt-4">
            <h1 className="font-normal text-2xl">{name}</h1>
            <p className="underline text-sm font-light">{email}</p>
        </div>
    );
};

export default UserInfo;
