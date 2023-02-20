import React from 'react';
import {useSelector} from "react-redux";
import HeaderForAll from "../Header/headerForAll";
import style from "./style.module.css"


const Iphone = () => {
    const Iphones =useSelector(state=>state.iphoneReducer.iphone)

    return (

        <div className={style.allIphones}>


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

export default Iphone;
