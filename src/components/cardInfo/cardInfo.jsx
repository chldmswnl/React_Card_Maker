import React from "react";
import CardForm from "../cardForm/cardForm";
import styles from "./cardInfo.module.css";

const CardInfo = ({ cards }) => {
  return (
    <section className={styles.cardInfo}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => {
        return <CardForm card={card} />;
      })}
    </section>
  );
};

export default CardInfo;
