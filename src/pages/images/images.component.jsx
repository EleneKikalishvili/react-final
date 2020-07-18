import React, { useState } from "react";
import { getSearchedImages } from "../../api";

import ImageCard from "../../components/image-card/image-card.component";
import Search from "../../components/search/search.component";

import styles from "./images.module.css";

function Images() {
  const [searchPage, setSearchPage] = useState("");
  const [imageNum, setImageNum] = useState("");
  const [images, setImages] = useState("");

  const getImages = (limit, page) => {
    getSearchedImages(limit, page).then((res) => {
      console.log(res.data);
      setImages(res.data);
    });
  };

  const onPageChange = (e) => {
    setSearchPage(e.target.value);
  };

  const onImageNumberChange = (e) => {
    setImageNum(e.target.value);
  };

  const onClick = () => {
    searchPage && imageNum
      ? getImages(searchPage, imageNum)
      : window.alert("provide both parameters");
    console.log("clicked");
  };

  let content = null;

  if (images) {
    content = images.map((image) => {
      console.log(image.url);
      return <ImageCard key={image.id} image={image.url} />;
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Search searchChange={onPageChange} holder="page number" />
        <Search searchChange={onImageNumberChange} holder="number of images" />
        <button className={styles.btn} onClick={onClick}>
          Search
        </button>
      </div>
      <div className={styles.imagesContainer}>{content}</div>
    </div>
  );
}

export default Images;
