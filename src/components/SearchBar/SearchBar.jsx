import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      toast.dismiss();
      toast.error("Enter text before searching", {
        toastId: "errorToast",
        autoClose: 3000,
      });
    } else {
      onSubmit(input);
    }
  };

  return (
    <header className={styles.heder}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="search field"
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <ToastContainer />
    </header>
  );
};

export default SearchBar;
