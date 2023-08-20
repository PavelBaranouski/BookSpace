import React, { useState } from "react";
import { Link } from "react-router-dom";

import UserFormContainer from "../../features/user/UserFormContainer";

import styles from "../../styles/Header.module.css";

import ROUTES from "../Routes/Routes";

import LOGO from "../../images/logo.png";
import AVATAR from "../../images/avatar.png";
import { useGetProductQuery } from "../../features/api/apiSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const { data, isLoading } = useGetProductQuery({ title: searchValue });

  console.log(data);

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
                : !data.length
                ? "No results"
                : data.map(({ title, images, isbn13 }) => {
                    return (
                      <Link
                        key={isbn13}
                        onClick={() => setSearchValue("")}
                        className={styles.item}
                        to={`/books/${isbn13}`}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={styles.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>

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
            {cart.length && <span className={styles.count}>{cart.length}</span>}
          </Link>
        </div>
      </div>
      <UserFormContainer />
    </div>
  );
};

export default Header;
