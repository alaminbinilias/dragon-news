//import React from 'react';

import { Outlet } from "react-router";
import NavSection from "../../Component/NavSection/NavSection";

const AuthLayout = () => {
    return (
        <div className="bg-gray-200 h-screen flex flex-col">
            <header className=" w-full p-0 lg:w-10/12 mx-0 pl-0 lg:mx-auto lg:pl-9">
                <NavSection></NavSection>
            </header>
            <main className="flex-1 w-10/12 mx-auto">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;