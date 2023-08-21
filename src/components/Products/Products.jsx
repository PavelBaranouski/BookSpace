import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Products.module.css";

const Products = ({ title, style = {}, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}

      <div className={styles.list}>
        {list.map(({ isbn13, image, title, subtitle, price }) => (
          <Link to={`/books/${isbn13}`} key={isbn13} className={styles.product}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
            />

            <div className={styles.wrapper}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.cat}>{subtitle}</div>
              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>{price}</div>
                  <div className={styles.oldPrice}>
                    {Math.ceil(parseFloat(price.replace("$", "")) * 1.25)}$
                  </div>
                </div>

                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
