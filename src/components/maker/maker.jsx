import React from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router";
import { useEffect } from "react";
import CardInfo from "../cardInfo/cardInfo";
import CardPreview from "../cardPreview/cardPreview";

const Maker = ({ authService }) => {
  const history = useHistory();
  const cards = [
    {
      name: "Eunji Choi",
      company: "Cineplex",
      title: "manager",
      email: "chldmswnl12@gmail.com",
      message: "Work hard",
    },
    {
      name: "Sam perez",
      company: "CRA",
      title: "CEO",
      email: "sammy@gmail.com",
      message: "Eat a lot",
    },
  ];
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header className={styles.header} onLogout={onLogout} />
      <div className={styles.content}>
        <CardInfo className={styles.cardInfo} cards={cards} />
        <CardPreview className={styles.cardPreview} cards={cards} />
      </div>
      <Footer claaName={styles.Footer} />
    </section>
  );
};

export default Maker;
