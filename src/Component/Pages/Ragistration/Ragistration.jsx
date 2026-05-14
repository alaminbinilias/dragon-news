//import React from 'react';

import { Link } from "react-router";

const Ragistration = () => {
    return (
        <div className="h-full flex items-center justify-center">

            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box h-140 lg:h-145 w-full lg:w-110 border p-4 lg:p-5">
                    <p className="text-3xl pb-10 text-center mt-7">Register Your Account</p>

                    {/*name section */}

                    <label className="label lg:text-[1rem]">Your Name</label>
                    <input type="text" className="input w-full lg:text-[1rem]" placeholder="Name" />

                    {/* Photo Section */}

                    <label className="label lg:text-[1rem]">Your Photo</label>
                    <input type="text" className="input w-full lg:text-[1rem]" placeholder="Name" />

                    {/*email section */}

                    <label className="label lg:text-[1rem]">Email</label>
                    <input type="email" className="input w-full lg:text-[1rem]" placeholder="Email" />


                    {/*password section */}

                    <label className="label lg:text-[1rem]">Password</label>
                    <input type="password" className="input w-full lg:text-[1rem]" placeholder="Password" />

                    <label className="label mt-2">
                        <input type="checkbox" className="checkbox" />
                        <span className="text-[0.9rem]">Accept All Terms & Conditions</span>
                    </label>

                    <button className="btn bg-[#6ab04c] border-0 btn-neutral mt-3">Register</button>
                    <p className="mt-2 lg:mt-4 text-[0.7rem] lg:text-[0.9rem]">Already have an account <Link to='/auth/login' className="hover:underline text-[#F75C5F] font-bold">Login</Link></p>
                </fieldset>
            </form>
        </div>
    );
};

export default Ragistration;