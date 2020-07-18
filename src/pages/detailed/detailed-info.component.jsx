import React from "react";
import Select from "../../components/select-breed/select.component";

import styles from "./detailed-info.module.css";

function Detailed() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>For detailed Info select breed</h1>
      <Select />
    </div>
  );
}

export default Detailed;
