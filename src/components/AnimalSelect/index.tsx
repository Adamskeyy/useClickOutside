// interfaces
import { AnimalProps } from "../Animal/index";
// styles
import "./AnimalSelect.css";

interface Props {
  clicked: () => void;
  animalOptions: AnimalProps[];
}

const AnimalSelect = ({ clicked, animalOptions }: Props) => {
  return (
    // przekazać value do clicked: event.target.value
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
