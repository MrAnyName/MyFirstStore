import React from 'react';
import style from "./style.module.css"
import {Link} from "react-router-dom";

const Header = ({categories}) => {
    return (
        <header>
            <ul className={style.menu}>
                <li><Link to="/">Home</Link></li>
                {categories.map(({id,name})=>{
                    return <li key={id}>
                        <Link to={name}>{name} </Link>
                    </li>
                })}
            </ul>
            <p>My Store</p>
        </header>
    );
};

export default Header;
