/* eslint-disable react-hooks/set-state-in-effect */
//import React from 'react';
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {

        if (id == '0') {
            setCategoryNews(data);
        }
        else if (id == '1') {
            const filterData = data.filter(news => news.others.is_today_pick === true);
            //console.log(filterData);
            setCategoryNews(filterData);
        }
        else {
            const filterData = data.filter(news => news.category_id == id)
            //console.log(filterData);
            setCategoryNews(filterData);
        }

    }, [id, data]);

    return (
        <div>
            <p className="font-bold "> Total <span className="text-red-500">{categoryNews.length} </span>News</p>

            <div>
                {
                    categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Category;