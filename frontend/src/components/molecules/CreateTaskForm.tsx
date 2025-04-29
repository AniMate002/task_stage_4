import React, { useState } from 'react';
import Input from '../atoms/Input';
import type { User } from '../../types/user.types';
import UsersGrid from '../organisms/UsersTaskFormGrid';
import BlueButton from '../atoms/BlueButton';
import FormLabel from '../atoms/FormLabel';

interface CreateTaskFormProps {
    users: Array<User>;
    handleCreateTask: (title: string, userId: number) => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({
    users,
    handleCreateTask,
}) => {
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState(0);

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title.trim() || !userId) return;
        handleCreateTask(title, userId);
    };

    return (
        <form className="mt-4" onSubmit={handleSubmitForm}>
            <FormLabel htmlFor="createTaskTitle">Title</FormLabel>
            <div className="flex gap-4 mb-10">
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="createTaskTitle"
                    placeholder="Enter Title"
                />
                <BlueButton type="submit">Save</BlueButton>
            </div>
            <FormLabel>Assign this task to</FormLabel>
            {users.length === 0 ? (
                <p className="text-sm text-stone-600 font-light mt-4">
                    No users to assign this task to
                </p>
            ) : (
                <UsersGrid
                    users={users}
                    activeUser={userId}
                    changeActiveUser={setUserId}
                />
            )}
        </form>
    );
};

export default CreateTaskForm;
