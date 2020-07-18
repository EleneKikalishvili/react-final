import React, { useState, useEffect } from "react";
import BreedsList from "../../components/breeds-list/breeds-list.component";
import withSpinner from "../../components/spinner/spinner.component";

import styles from "./breeds.module.css";

function BreedsPage() {
  const [Loading, setLoading] = useState(true);

  const BreedsWithSpinner = withSpinner(BreedsList);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <BreedsWithSpinner isLoading={Loading} />
    </div>
  );
}

export default BreedsPage;
