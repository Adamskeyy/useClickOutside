import { AnimalProps } from "../Animal/index";

interface Props {
  clicked: () => void;
  animalOptions: AnimalProps[];
}

const AnimalSelect = ({ clicked, animalOptions }: Props) => {
  return (
    <>
      <label htmlFor="animal-select">Choose a pet:</label>
      <select onClick={clicked} name="animals" id="animal-select">
        <option value="">--Please choose an option--</option>
        {animalOptions.map((animal) => (
          <option key={animal.id} value={animal.name}>
            {animal.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default AnimalSelect;
