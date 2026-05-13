//import React from 'react';

import { Link } from "react-router";

const Login = () => {
    return (
        <div className="h-full flex items-center justify-center">

                <form>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box h-100 lg:h-114 w-full lg:w-110 border p-4 lg:p-5">
                        <p className="text-3xl pb-10 text-center mt-10">Login Your Account</p>
                        <label className="label lg:text-[1rem]">Email</label>
                        <input type="email"  className="input w-full lg:text-[1rem]" placeholder="Email" />

                        <label className="label lg:text-[1rem]">Password</label>
                        <input type="password" className="input w-full lg:text-[1rem]" placeholder="Password" />

                        <div className="mt-1"><a className="link link-hover lg:text-[0.9rem]">Forgot password?</a></div>

                        <button className="btn btn-primary mt-3">Login</button>
                        <p className="mt-2 lg:mt-4 text-[0.7rem] lg:text-[0.9rem]">Dont’t Have An Account ? <Link to='/auth/register' className="hover:underline text-[#F75C5F] font-bold">Register</Link></p>
                    </fieldset>
                </form>
        </div>
    );
};

export default Login;