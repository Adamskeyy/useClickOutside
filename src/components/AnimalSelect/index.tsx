// tools
import React from "react";
// interfaces
import { AnimalProps } from "../Animal/";
// styles
import "./AnimalSelect.css";

interface Props {
  clicked: any;
  animalOptions: AnimalProps[];
}

const AnimalSelect = ({ clicked, animalOptions }: Props) => {
  return (
    <select
      onChange={clicked}
      name="animals"
      id="animal-select"
      className="animalSelect"
    >
      <option value="">--Please choose an option--</option>
      {animalOptions.map((animal) => (
        <option
          className="animalSelect__option"
          key={animal.id}
          value={animal.name}
        >
          {animal.name}
        </option>
      ))}
    </select>
  );
};

export default AnimalSelect;
