import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => (
  <section className={styles.card}>
    <img
      src="../../../public/images/default_logo.png"
      alt="image"
      className={styles.cardImg}
    />
    <div className={styles.cardInfo}>
      <p className={styles.name}>{card.name}</p>
      <p className={styles.info}>{card.company}</p>
      <hr className={styles.line} />
      <p className={styles.info}>{card.title}</p>
      <p className={styles.info}>{card.email}</p>
      <p className={styles.info}>{card.message}</p>
    </div>
  </section>
);

export default Card;
