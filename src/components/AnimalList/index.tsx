import React from "react";
// interfaces
import { AnimalProps } from "../Animal/index";
// components
import Animal from "../Animal";
// styles
import "./AnimalList.css";
// tools
import { useClickOutside } from "../hooks/useClickOutside";

interface Props {
  selectedValue: string;
  animalOptions: AnimalProps[];
}

const AnimalList = ({ selectedValue, animalOptions }: Props) => {
  const { onStartListeningClickOutside } = useClickOutside();

  return (
    <ul className="animalList">
      {animalOptions.map((animal) => (
        <React.Fragment key={animal.id}>
          <Animal
            selectedStyle={
              // onStartListeningClickOutside(), { zIndex: 1000 }
              selectedValue === animal.name ? { zIndex: 1000 } : null
            }
            id={animal.id}
            name={animal.name}
          />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default AnimalList;
