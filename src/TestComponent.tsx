import React from "react";

interface Props {
  clicked: () => void;
}

const TestComponent = ({ clicked }: Props) => {
  // Dać selecta/dropdown
  return (
    <>
      <label htmlFor="pet-select">Choose a pet:</label>
      <select onClick={clicked} name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </>
  );
};

export default TestComponent;
