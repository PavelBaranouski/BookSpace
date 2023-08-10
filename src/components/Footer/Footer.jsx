import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";
import LOGO from "../../images/logo.png";
import ROUTES from "../Routes/Routes";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME} className="header__link">
          <img src={LOGO} alt="BOOKSPACE Logo" className="header__logo" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by{" "}
        <a
          href="https://github.com/PavelBaranouski"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pavel Baranouski
        </a>
      </div>

      <div className={styles.socials}>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
