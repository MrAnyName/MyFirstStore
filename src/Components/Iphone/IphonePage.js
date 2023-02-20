import React from 'react';
import {useSelector} from "react-redux";
import style from "./style.module.css";
import HeaderForAll from "../Header/headerForAll";

const IphonePage = () => {
    const Iphones =useSelector(state=>state.iphoneReducer.iphone)

    return (

        <div className={style.allIphones}>
            <HeaderForAll/>

            <div>
                <div className={style.all}>{Iphones.map(({id,name ,price,img})=>{
                    return <div className={style.phones} key={id}>
                        <h2>{name}</h2>
                        <h3>{price}$</h3>
                        <img src={img} alt="img"/>
                    </div>
                })}</div>
            </div>
        </div>
    );
};


export default IphonePage;

