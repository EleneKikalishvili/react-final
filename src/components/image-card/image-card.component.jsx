import React from "react";

import styles from "./image-card.module.css";

function ImageCard(image) {
  console.log(image);

  return (
    <div className={styles.container}>
      <img className={styles.animalImg} alt="animal" src={image.image} />
    </div>
  );
}

export default ImageCard;
