import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService, onLogout }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((obj) => {
        goToMaker(obj.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header onLogout={onLogout} />
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
