import type { User } from "../../types/user.types";
import UserImage from "/user.png";

interface UserCardInTaskFormProps {
    user: User;
    isActive: boolean;
    changeActiveUser: React.Dispatch<React.SetStateAction<number>>;
}

const UserCardInTaskForm: React.FC<UserCardInTaskFormProps> = ({
    user,
    isActive,
    changeActiveUser,
}) => {
    return (
        <button
            onClick={() => changeActiveUser(user.id)}
            type='button'
            className={`w-[170px] h-[170px] rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition duration-[0.2s] cursor-pointer flex items-center justify-center flex-col p-2 ${
                isActive ? "bg-blue-100" : "bg-white"
            }`}
        >
            <img alt='user_avatar' src={UserImage} className='w-[70px]' />
            <h2 className='text-blue-400 text-center'>{user.name}</h2>
            <p
                className='text-sm font-light text-stone-500 truncate w-full text-center'
                title={user.email}
            >
                {user.email}
            </p>
        </button>
    );
};

export default UserCardInTaskForm;
