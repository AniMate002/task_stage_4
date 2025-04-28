import React from "react";

interface InputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {}

const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            {...props}
            className='w-full bg-stone-100 p-4 font-light rounded-2xl border border-blue-500'
        />
    );
};

export default Input;
