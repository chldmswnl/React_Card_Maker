import React from "react";
import Card from "../card/card";
import styles from "./cardPreview.module.css";

const CardPreview = ({ cards }) => {
  return (
    <section className={styles.cardPreview}>
      <h1 className={styles.title}>Card Preview</h1>
      {cards.map((card) => {
        return <Card card={card} />;
      })}
    </section>
  );
};

export default CardPreview;
