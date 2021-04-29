import React from "react";
import styles from "./cardForm.module.css";

const CardForm = ({ card }) => {
  return (
    <form action="" className={styles.cardForm}>
      <div className={styles.row}>
        <input
          type="text"
          placeholder="Name"
          className={styles.firstRow}
          value={card.name}
        />

        <input
          type="text"
          placeholder="Company"
          className={styles.firstRow}
          value={card.company}
        />
        <select name="colors" id="color" className={styles.firstRow}>
          <option value="">Light</option>
          <option value="colorful">Colorful</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
      <div className={styles.row}>
        <input
          type="text"
          placeholder="Title"
          className={styles.secondRow}
          value={card.title}
        />
        <input
          type="text"
          placeholder="Email"
          className={styles.secondRow}
          value={card.email}
        />
      </div>
      <div className={styles.row}>
        <textarea
          name="message"
          id="message"
          rows="2"
          placeholder="message"
          className={styles.textArea}
          value={card.message}
        ></textarea>
      </div>
      <div className={styles.row}>
        <button className={styles.formBtn}>No file</button>
        <button className={styles.formBtn}>Add</button>
      </div>
    </form>
  );
};

export default CardForm;
