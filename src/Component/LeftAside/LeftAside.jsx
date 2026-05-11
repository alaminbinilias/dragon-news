//import React from 'react';

import { Suspense } from "react";
import Catagories from "../Catagories/Catagories";
import { Puff } from "react-loader-spinner";

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<Puff
                visible={true}
                height="40"
                width="80"
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />}>
                <Catagories></Catagories>
            </Suspense>
        </div>
    );
};

export default LeftAside;