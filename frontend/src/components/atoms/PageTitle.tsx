import React from "react";

interface PageTitleProps {
    title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
    return (
        <div className='montserrat-font-light text-4xl text-stone-700'>
            {title}
        </div>
    );
};

export default PageTitle;
