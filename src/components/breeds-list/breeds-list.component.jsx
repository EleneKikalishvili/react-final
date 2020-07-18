import React, { useState, useEffect } from "react";
import { getBreeds } from "../../api";

import Search from "../search/search.component";
import BreedsCard from "../breeds-card/breeds-card.component";

import styles from "./breeds-list.module.css";

function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      getBreeds().then((res) => {
        console.log(res.data);
        setBreeds(res.data);
      });
    }
    return () => (isSubscribed = false);
  }, []);

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredBreeds = breeds.filter((breed) => {
    return breed.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const content = filteredBreeds.map((breed) => {
    return (
      <BreedsCard
        key={breed.id}
        name={breed.name}
        description={breed.description}
        life={breed.life_span}
      />
    );
  });

  return (
    <div>
      <Search searchChange={onSearchChange} holder="Breed Name" />
      <div className={styles.breedsContainer}> {content}</div>
    </div>
  );
}

export default Breeds;
