import React from 'react';
import style from "./style.module.css";
import {Link} from "react-router-dom";

const headerForAll = () => {
    return (
        <div>
            <header>
                <ul className={style.menu}>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <p>My Store</p>
            </header>
        </div>
    );
};

export default headerForAll;
