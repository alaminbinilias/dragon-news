//import React from 'react';

import AddCard from "../AddCard/AddCard";
import FindUs from "../FindUs/FindUs";
import LoginSection from "../LoginSection/LoginSection";
import QZone from "../QZone/QZone";

const RightAside = () => {
    return (
        <div className="space-y-7">
            <LoginSection></LoginSection>
            <FindUs></FindUs>
            <QZone></QZone>
            <AddCard></AddCard>
        </div>
    );
};

export default RightAside;