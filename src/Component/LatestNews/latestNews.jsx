//import Marquee from "react-fast-marquee";

//import React from 'react';
const LatestNews = () => {

    return (
        <div>
            <div className="flex items-center gap-3 p-3 bg-[#F3F3F3]">
                <div>
                    <p className="px-6 py-3 bg-[#D72050] text-white">Latest</p>
                </div>
                <marquee className='flex items-center'>
                    <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis doloremque tenetur, asperiores sit voluptates assumenda eveniet odio? Quam, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis doloremque tenetur, asperiores sit voluptates assumenda eveniet odio? Quam, assumenda.</p>
                </marquee>
            </div>
        </div>
    );
};

export default LatestNews;