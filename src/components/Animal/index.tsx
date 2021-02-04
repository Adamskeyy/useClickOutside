// styles
import "./Animal.css";

export interface AnimalProps {
  selectedStyle?: any;
  id: number;
  name: string;
}

const Animal = ({ selectedStyle, id, name }: AnimalProps) => {
  return (
    <li style={selectedStyle} className="animalList__item" key={id}>
      {name}
    </li>
  );
};

export default Animal;
