import React from "react";
import Button from "./Button";
import styles from "../styles/modules/app.module.scss";

function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <Button variant="primary">Add Task</Button>
    </div>
  );
}

export default AppHeader;
