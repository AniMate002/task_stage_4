import React from "react";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import type { User } from "../../types/user.types";
import { useNavigate } from "react-router";
import BaseRoutes from "../../constants/router.constants";

interface UserCardProps {
    user: User;
    handleDeleteUser: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({
    user: { id, name, email },
    handleDeleteUser,
}) => {
    const navigate = useNavigate();

    return (
        <div className='w-full max-w-sm p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col gap-4'>
            <div className='flex items-baseline justify-between'>
                <div className='flex flex-col items-start'>
                    <h2 className='text-lg font-semibold text-gray-800'>
                        {name}
                    </h2>
                    <p className='text-sm text-gray-500 break-words'>{email}</p>
                </div>
                <button className='cursor-pointer'>
                    <LuExternalLink />
                </button>
            </div>
            <div className='flex justify-end gap-2 mt-2'>
                <button
                    onClick={() => navigate(BaseRoutes.editUser(id))}
                    className='px-4 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-1 cursor-pointer active:scale-[0.9]'
                >
                    <FaPencilAlt size={10} />
                    <span>Edit</span>
                </button>
                <button
                    onClick={() => handleDeleteUser(id)}
                    className='px-4 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-1 cursor-pointer active:scale-[0.9]'
                >
                    <FaRegTrashAlt />
                    <span>Delete</span>
                </button>
            </div>
        </div>
    );
};

export default UserCard;
