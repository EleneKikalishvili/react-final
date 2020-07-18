import React from "react";

import styles from "./search.module.css";

const Search = ({ searchChange, holder }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.searchStyles}
        type="search"
        placeholder={holder}
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
