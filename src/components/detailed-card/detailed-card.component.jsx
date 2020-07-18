import React from "react";

import styles from "./detailed-card.module.css";

function UserCard({ name, image, origin, temperament, description, life }) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <img className={styles.animalImg} alt="userPic" src={image} />
      <div className={styles.info}>
        <h6>origin</h6>
        <p>{origin}</p>
        <h6>Temperament</h6>
        <p>{temperament}</p>
        <h6>Description </h6>
        <p>{description}</p>
        <h6>Life Span</h6>
        <p>{life}</p>
      </div>
    </div>
  );
}

export default UserCard;
