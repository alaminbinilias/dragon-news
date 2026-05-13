//import React from 'react';
import classImg from "../../Resources/Images/class.png"
import swim from "../../Resources/Images/swimming.png"
import ground from '../../Resources/Images/playground.png'

const QZone = () => {
    return (
        <div>
            <div className="w-full bg-gray-200 space-y-4 p-4 flex flex-col">
                <img src={swim} alt="Swimming" />
                <img src={classImg} alt="Class" />
                <img src={ground} alt="Play Ground" />
            </div>
        </div>
    );
};

export default QZone;