import React from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router";
import { useEffect } from "react";

const Maker = ({ authService }) => {
  const history = useHistory();
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
    <section claaName={styles.maker}>
      <Header onLogout={onLogout} />
      <h1>hello</h1>
      <Footer />
    </section>
  );
};

export default Maker;
