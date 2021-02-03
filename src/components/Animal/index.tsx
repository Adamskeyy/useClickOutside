// styles
import "./Animal.css";

export interface AnimalProps {
  id: number;
  name: string;
}

const Animal = ({ id, name }: AnimalProps) => {
  return (
    <li className="animalList__item" key={id}>
      {name}
    </li>
  );
};

export default Animal;
