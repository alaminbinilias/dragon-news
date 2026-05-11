//import React from 'react';

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";

const LoginSection = () => {
    return (
        <div>
            <p className="font-bold text-[1.1rem]">Login With</p>
            <div className="mt-5 w-full">
                <NavLink className='btn btn-outline hover:bg-[#D72050] hover:text-white w-full p-5'> <FcGoogle size={24}/> Login With Google</NavLink>
                <NavLink className='btn btn-outline hover:bg-[#636e72] hover:text-white w-full p-5 mt-2'> <FaGithub size={24}/> Login With Github</NavLink>
            </div>
        </div>
    );
};

export default LoginSection;