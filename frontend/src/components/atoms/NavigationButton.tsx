import React from "react";
import { NavLink, NavLinkProps } from "react-router";

interface NavigationButtonProps extends NavLinkProps {}

const NavigationButton: React.FC<NavigationButtonProps> = (props) => {
    return (
        <NavLink
            {...props}
            className={
                "text-stone-700 underline transition duration-[0.2s] hover:text-stone-400 uppercase font-bold tracking-wider"
            }
        >
            {props.children}
        </NavLink>
    );
};

export default NavigationButton;
