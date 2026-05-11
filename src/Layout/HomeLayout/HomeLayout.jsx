//import React from 'react';
import { Outlet } from "react-router";
import HeaderSection from "../../Component/HeaderSection/HeaderSection";
import LatestNews from "../../Component/LatestNews/LatestNews";
import NavSection from "../../Component/NavSection/NavSection";
import LeftAside from "../../Component/LeftAside/LeftAside";
import RightAside from "../../Component/RightAside/RightAside";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <HeaderSection></HeaderSection>
                <section className="w-10/12 mx-auto mt-14">
                    <LatestNews></LatestNews>
                </section>
                <nav className="w-10/12 mx-auto">
                    <NavSection></NavSection>
                </nav>
            </header>
            <main className="w-10/12 mx-auto mt-16 grid grid-cols-12 gap-8 ">
                <aside className="left-side col-span-3">
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="right-side col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;