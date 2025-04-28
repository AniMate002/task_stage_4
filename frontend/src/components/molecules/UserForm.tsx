import React, { useEffect, useState } from "react";
import FormLabel from "../atoms/FormLabel";
import Input from "../atoms/Input";
import BlueButton from "../atoms/BlueButton";

interface UserFormProps {
    onSubmit: (name: string, email: string, id?: number) => void;
    preloadData?: { name: string; email: string; id: number };
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, preloadData }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) return;
        onSubmit(name, email, preloadData?.id);
    };

    useEffect(() => {
        if (preloadData) {
            setName(preloadData.name);
            setEmail(preloadData.email);
        }
    }, [preloadData]);

    return (
        <form onSubmit={handleFormSubmit} className='mt-4'>
            <FormLabel>Name</FormLabel>
            <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Ryan Gosling...'
            />
            <div className='my-10' />
            <FormLabel>Email</FormLabel>
            <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='ryan.g@gmail.com...'
            />
            <div className='my-5' />
            <BlueButton type='submit'>Save User</BlueButton>
        </form>
    );
};

export default UserForm;
