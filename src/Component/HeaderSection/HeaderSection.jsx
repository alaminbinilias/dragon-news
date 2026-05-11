//import React from 'react';
import { format } from 'date-fns';
import logo from '../../Resources/Images/logo.png'

const HeaderSection = () => {
    const today = new Date();
    const formatDate = format(today,"EEEE , LLLL dd, yyyy")
    return (
        <div className='text-center'>
            <div className="imageSection mt-9 flex justify-center">
                <img className='w-100 lg:w-150' src={logo} alt="" />
            </div>
            <div className='mt-5'>
                <p className='text-[1.2rem] lg:text-[1.6rem] text-[#706F6F]'>Journalism Without Fear or Favour</p>
            </div>
            <div className='mt-3 text-[1.3rem] lg:text-[1.5rem]'>
                <p>{formatDate}</p>
            </div>
        </div>
    );
};

export default HeaderSection;