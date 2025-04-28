import React from "react";

interface ChangeStatusButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

const ChangeStatusButton: React.FC<ChangeStatusButtonProps> = (props) => {
    return (
        <button
            className='bg-blue-500 text-white rounded-2xl text-sm py-1 active:scale-[0.9] active:bg-blue-400 transition duration-[0.1s] hover:bg-blue-600 cursor-pointer'
            {...props}
        >
            {props.children}
        </button>
    );
};

export default ChangeStatusButton;
