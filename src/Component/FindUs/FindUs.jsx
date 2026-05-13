//import React from 'react';

import { BsTwitter } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";

const FindUs = () => {
    return (
        <div>
            <p className="font-semibold text-xl mb-4">Find Us On</p>
            <div>
                <div className="join join-vertical w-full py-3">
                    <button className="btn join-item flex justify-start"><SiFacebook size={20}/><span className="text-gray-500">Facebook</span></button>
                    <button className="btn join-item flex justify-start"><BsTwitter size={20}/><span className="text-gray-500">Twitter</span></button>
                    <button className="btn join-item flex justify-start"><FaSquareInstagram size={20}/><span className="text-gray-500">Intagram</span></button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;