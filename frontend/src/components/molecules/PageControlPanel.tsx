import React from "react";
import PageTitle from "../atoms/PageTitle";
import BlueButton from "../atoms/BlueButton";
import { TiPlus } from "react-icons/ti";

interface PageControlPanelProps {
    pageTitle: string;
    createItemTitle: string;
    handleButtonClick: any;
    showIcon: boolean;
}

const PageControlPanel: React.FC<PageControlPanelProps> = ({
    pageTitle,
    handleButtonClick,
    createItemTitle,
    showIcon,
}) => {
    return (
        <section className='flex w-full items-center justify-between'>
            <PageTitle title={pageTitle} />
            <BlueButton onClick={handleButtonClick}>
                <span>{createItemTitle}</span>
                {showIcon && <TiPlus />}
            </BlueButton>
        </section>
    );
};

export default PageControlPanel;
