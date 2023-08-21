import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ROUTES } from "../../utils/routes";

import styles from "../../styles/Product.module.css";

import { addItemToCart } from "../../features/user/userSlice";

const Product = (item) => {
  const { title, price, image, desc, year, authors } = item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart({ ...item }));
  };

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}</div>
        <div className={styles.color}>
          <span>Authors:</span> {authors}
        </div>
        <div className={styles.sizes}>
          <span>year: {year}</span>

          <div className={styles.list}></div>
        </div>

        <p className={styles.desc}>{desc}</p>

        <div className={styles.actions}>
          <button onClick={addToCart} className={styles.add}>
            Add to cart
          </button>
          <button className={styles.favourite}>Add to favourites</button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people purchased</div>

          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
