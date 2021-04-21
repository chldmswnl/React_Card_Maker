import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <div className={styles.login}>
      <header className={styles.header}>
        <p className={styles.headerName}>Business Card Maker 💷</p>
      </header>
      <div className={styles.loginSection}>
        <span className={styles.sectionName}>Login</span>
        <button className={styles.sectionBtn}>Google</button>
        <button className={styles.sectionBtn}>Github</button>
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerName}>Made by Eunji Choi</p>
      </footer>
    </div>
  );
};

export default Login;
