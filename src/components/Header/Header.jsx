import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "../../styles/Header.module.css";

import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.png";
import AVATAR from "../../images/avatar.png";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const { cart } = useSelector(({ user }) => user);

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const { data, isLoading } = useGetProductsQuery({ title: searchValue });

  const [theme, setTheme] = useState("dark"); // Начальная тема

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

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
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>Guest</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anyting"
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>

          {searchValue && (
            <div className={styles.box}>
              {isLoading
                ? "Loading"
                : data?.total === "0"
                ? "No results"
                : data?.books?.map(({ title, image, isbn13 }) => {
                    return (
                      <Link
                        key={isbn13}
                        onClick={() => setSearchValue("")}
                        className={styles.item}
                        to={`/books/${isbn13}`}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${image})` }}
                        />
                        <div className={styles.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>
        <input
          type="range"
          min="0"
          max="1"
          step="1"
          id={styles.theme_toggle}
          value={theme === "light" ? "0" : "1"}
          onChange={handleThemeToggle}
        />
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            {cart.length && (
              <span className={styles.count}>
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>
      {/* <UserFormContainer /> */}
    </div>
  );
};

export default Header;
