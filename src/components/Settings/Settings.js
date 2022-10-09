import React from "react";
import styles from "./Settings.module.css";
import Form from "./Form/Form";
import { useHistory } from "react-router-dom";

const Settings = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  if (!user) {
    history.push("/login");
  }

  return (
    <div className={styles.pageContainer}>
      <section className={styles.hero}>
        <h1>Profile</h1>
      </section>
      <section className={styles.stat}>
        <Form user={user} />
      </section>
    </div>
  );
};

export default Settings;
