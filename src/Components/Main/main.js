import React from 'react';
import {Link} from "react-router-dom";
import Header from "../Header/header";
import {useSelector} from "react-redux";
import Iphone from "../Iphone/iphone";



const Main = () => {
    const categories =useSelector(state=>state.categoriesReducer.categories)
    return (
        <div>
            <Header categories={categories}/>
            <Iphone/>
        </div>
    );
};

export default Main;
