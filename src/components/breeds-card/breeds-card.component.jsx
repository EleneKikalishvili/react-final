import React from "react";

import styles from "./breeds-card.module.css";

function UserCard({ name, description, life }) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <div className={styles.info}>
        <p>Description: {description}</p>
        <p>Life-span: {life}</p>
      </div>
    </div>
  );
}

export default UserCard;
