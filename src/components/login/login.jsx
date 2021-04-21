import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <section className={styles.login}>
      <Header />
      <section className={styles.loginSection}>
        <h1 className={styles.sectionName}>Login</h1>
        <ol className={styles.loginList}>
          <li className={styles.list}>
            <button onClick={onLogin} className={styles.sectionBtn}>
              Google
            </button>
          </li>
          <li className={styles.list}>
            <button onClick={onLogin} className={styles.sectionBtn}>
              Github
            </button>
          </li>
        </ol>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
