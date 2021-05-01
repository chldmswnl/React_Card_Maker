import React from "react";
import styles from "./cardForm.module.css";
import Button from "../button/button";
import ImageFileInput from "../iamge_file_input/image_file_input";

const CardForm = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;

  const onSubmit = () => {};
  return (
    <form className={styles.cardForm}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className={styles.input}
        value={name}
      />

      <input
        type="text"
        name="company"
        placeholder="Company"
        className={styles.input}
        value={company}
      />
      <select name="theme" value={theme} className={styles.select}>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
        <option value="dark">Dark</option>
      </select>

      <input
        type="text"
        name="title"
        placeholder="Title"
        className={styles.input}
        value={title}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className={styles.input}
        value={email}
      />

      <textarea
        name="message"
        placeholder="message"
        className={styles.textarea}
        value={message}
      />

      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardForm;
