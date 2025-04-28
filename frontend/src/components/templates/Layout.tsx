import React from "react";
import { Outlet } from "react-router";
import Header from "../organisms/Header";

const Layout: React.FC = () => {
    return (
        <div className='w-[100vw] min-h-[100vh] bg-stone-50 flex justify-center items-center montserrat-font-normal'>
            <div className='max-w-[1300px] w-full min-h-[100vh]  pt-10'>
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
