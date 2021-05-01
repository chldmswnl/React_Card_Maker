import React from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import CardInfo from "../cardInfo/cardInfo";
import CardPreview from "../cardPreview/cardPreview";

const Maker = ({ authService }) => {
  const history = useHistory();
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Eunji Choi",
      company: "Cineplex",
      theme: "light",
      title: "manager",
      email: "chldmswnl12@gmail.com",
      message: "Work hard",
      fileName: "ellie",
      fileURL: null,
    },
    {
      id: "2",
      name: "Sam perez",
      company: "CRA",
      title: "CEO",
      theme: "dark",
      email: "sammy@gmail.com",
      message: "Eat a lot",
      fileName: "ellie",
      fileURL: null,
    },
    {
      id: "3",
      name: "Sam perez",
      company: "CRA",
      title: "CEO",
      theme: "colorful",
      email: "sammy@gmail.com",
      message: "Eat a lot",
      fileName: "ellie",
      fileURL: null,
    },
  ]);
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
