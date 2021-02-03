import React from "react";
// interfaces
import { AnimalProps } from "../Animal/index";
// components
import Animal from "../Animal";
// styles
import "./AnimalList.css";

interface Props {
  animalOptions: AnimalProps[];
}

const AnimalList = ({ animalOptions }: Props) => {
  return (
    <ul className="animalList">
      {animalOptions.map((animal) => (
        <React.Fragment key={animal.id}>
          <Animal id={animal.id} name={animal.name} />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default AnimalList;
