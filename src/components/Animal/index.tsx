export interface AnimalProps {
  id: number;
  name: string;
}

const Animal = ({ id, name }: AnimalProps) => {
  return <li key={id}>{name}</li>;
};

export default Animal;
