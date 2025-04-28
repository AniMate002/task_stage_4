import React from "react";

interface BlueButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

const BlueButton: React.FC<BlueButtonProps> = (props) => {
    return (
        <button
            className='cursor-pointer bg-blue-500 rounded-2xl text-white flex items-center justify-center w-fit px-8 py-4 uppercase text-sm gap-4
            hover:bg-blue-600 transition duration-[0.2s] active:scale-[0.9] active:bg-blue-400'
            {...props}
        >
            {props.children}
        </button>
    );
};

export default BlueButton;
