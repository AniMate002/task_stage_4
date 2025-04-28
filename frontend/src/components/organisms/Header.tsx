import React from "react";
import NavigationButton from "../atoms/NavigationButton";
import BaseRoutes from "../../constants/router.constants";

const Header: React.FC = () => {
    return (
        <header className='w-full flex items-center justify-center gap-10 mb-32'>
            <NavigationButton to={BaseRoutes.home}>Tasks</NavigationButton>
            <NavigationButton to={BaseRoutes.users}>Users</NavigationButton>
        </header>
    );
};

export default Header;
