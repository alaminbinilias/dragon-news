//import React from 'react';
import { use } from "react";
import { NavLink } from "react-router";

const newsCatagories = fetch('/categories.json').then(res => res.json());
//console.log(newsCatagories);

const Catagories = () => {
    const catagories = use(newsCatagories);
    return (
        <div>
            <h2 className="font-semibold">All Catagory</h2> 
            <div className="grid grid-cols-1 mt-2">
                {
                    catagories.map(catagory=><NavLink to={`catagory/${catagory.id}`} key={catagory.id} className='mt-1 w-full btn border-0 hover:bg-gray-400 hover:text-white bg-white text-gray-400 font-medium'>{catagory.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Catagories;