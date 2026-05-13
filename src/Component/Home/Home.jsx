//import React from 'react';

import { Suspense, use } from "react";
import NewsCard from "../NewsCard/NewsCard";

const data = fetch('/news.json').then(res => res.json());

const Home = () => {

    const AllData = use(data);
    console.log(AllData);

    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <div>
                    {
                        AllData.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Home;