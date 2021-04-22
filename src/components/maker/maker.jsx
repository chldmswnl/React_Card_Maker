import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const Maker = ({ onLogout }) => (
  <section>
    <Header onLogout={onLogout} />
    <h1>hello</h1>
    <Footer />
  </section>
);

export default Maker;
