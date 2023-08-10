import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Header.module.css";

import ROUTES from "../Routes/Routes";

import LOGO from "../../images/logo.png";
import AVATAR from "../../images/avatar.png";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME} className="header__link">
                    <img src={LOGO} alt="BOOKSPACE" className="header__logo" />
                    
                </Link>
            </div>
            
            <div className={styles.info}>
                <div className={styles.user}>
                    <div 
                    className={styles.avatar} 
                    style={{ backgroundImage: `url(${AVATAR})`}}
                    />
                    <div className={styles.username}>Guest</div>
                </div>
                <form className={styles.form}>
                    <div className={styles.icon}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
                    </div>
                    <div className={styles.input}>
                        <input
                        type="search"
                        name="search"
                        placeholder="Search for anyting"
                        autoComplete="off"
                        onChange={() => {}} 
                        value=""/>
                    </div>

                    <div className={styles.box}></div>

                </form>

                <div className={styles.account}>
                    <Link to={ROUTES.HOME} className={styles.favourites}>
                        <svg className={styles["icon-fav"]}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
                        </svg>
                    </Link>
                    <Link to={ROUTES.CART} className={styles.cart}>
                        <svg className={styles["icon-cart"]}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
                        </svg>
                        <span className={styles.count}></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header