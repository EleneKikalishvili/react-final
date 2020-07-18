import React, { useState, useEffect } from "react";
import { getBreeds, getDetailedInfo } from "../../api";

import DetailedCard from "../detailed-card/detailed-card.component";
import withSpinner from "../spinner/spinner.component";

import styles from "./select.module.css";

function Select() {
  const [breeds, setBreeds] = useState([]);
  const [info, setInfo] = useState([]);
  const [image, setImage] = useState("");
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(true);

  const CardWithSpinner = withSpinner(DetailedCard);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      getBreeds().then((res) => {
        setBreeds(res.data);
      });
    }
    return () => (isSubscribed = false);
  }, []);

  const options = breeds.map((breed) => {
    return (
      <option key={breed.id} value={breed.id}>
        {breed.name}
      </option>
    );
  });

  const handleChange = (e) => {
    getDetailedInfo(e.target.value).then((res) => {
      setLoading(true);
      setInfo(res.data[0].breeds);
      setImage(res.data[0].url);
      setSelected(true);
    });
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className={styles.container}>
      <select
        className="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        defaultValue={"default"}
        onChange={handleChange}
      >
        <option value="default">Choose...</option>
        {options}
      </select>
      <div className={styles.cardContainer}>
        {!selected ? (
          <h3 className={styles.msg}>Nothing To Show</h3>
        ) : (
          <CardWithSpinner
            name={info[0].name}
            image={image}
            origin={info[0].origin}
            temperament={info[0].temperament}
            description={info[0].description}
            life={info[0].life_span}
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
}

export default Select;
