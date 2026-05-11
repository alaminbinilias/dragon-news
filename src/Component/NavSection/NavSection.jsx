//import React from 'react';
import profile from '../../Resources/Images/user.png'

import { NavLink } from "react-router";

const NavSection = () => {
    return (
        <div className='flex justify-between mt-9 items-center'>
            <div></div>
                <div className="nav flex text-xl gap-3 text-[#828181]">
                    <NavLink>Home</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Career</NavLink>
                </div>
                <div className="profile flex gap-2">
                    <img className='cursor-pointer' src={profile}></img>
                    <p className='btn bg-[#403F3F] text-white px-10'>Login</p>
                </div>
        </div>
    );
};

export default NavSection;