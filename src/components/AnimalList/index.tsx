import { AnimalProps } from "../Animal/index";

interface Props {
  clicked: () => void;
  animalOptions: AnimalProps[];
}

const AnimalList = ({ clicked, animalOptions }: Props) => {
  // Dać selecta/dropdown
  return (
    <>
      <label htmlFor="animal-select">Choose a pet:</label>
      <select onClick={clicked} name="animals" id="animal-select">
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

export default AnimalList;
