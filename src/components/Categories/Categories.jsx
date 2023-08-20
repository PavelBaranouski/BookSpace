import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Categories.module.css";

const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.section}>
      <h2>{title}</h2>

      <div className={styles.list}>
        {list.map(({ isbn13, image, title }) => (
          <Link
            to={`/categories/${isbn13}`}
            key={isbn13}
            className={styles.item}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className={styles.title}></h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
