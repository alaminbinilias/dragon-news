//import React from 'react';

import { Outlet } from "react-router";
import NavSection from "../../Component/NavSection/NavSection";

const AuthLayout = () => {
    return (
        <div className="bg-gray-200 h-screen flex flex-col">
            <header className="w-10/12 mx-auto p-0">
                <NavSection></NavSection>
            </header>
            <main className="flex-1">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;