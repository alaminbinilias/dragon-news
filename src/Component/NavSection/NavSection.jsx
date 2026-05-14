//import React from 'react';
import profile from '../../Resources/Images/user.png'

import { NavLink } from "react-router";

const NavSection = () => {
    return (
        <div className='py-8 flex items-center justify-between pl-0 lg:pl-39'>
            <div></div>
                <div className="nav flex text-xl gap-3 text-[#828181]">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Career</NavLink>
                </div>
                <div className="profile flex gap-2">
                    <img  className='cursor-pointer rounded-2xl hidden lg:block' src={profile}></img>
                    <NavLink to='/auth/login' className='btn bg-[#403F3F] text-white px-10'>Login</NavLink>
                </div>
        </div>
    );
};

export default NavSection;