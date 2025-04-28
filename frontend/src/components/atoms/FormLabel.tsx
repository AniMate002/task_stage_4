import React from "react";

interface FormLabelProps
    extends React.DetailedHTMLProps<
        React.LabelHTMLAttributes<HTMLLabelElement>,
        HTMLLabelElement
    > {}

const FormLabel: React.FC<FormLabelProps> = (props) => {
    return (
        <label {...props} className='text-blue-600 font-light'>
            {props.children}
        </label>
    );
};

export default FormLabel;
