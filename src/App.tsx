import AnimalList from "./components/AnimalList";
import "./App.css";

import { useClickOutside } from "./components/hooks/useClickOutside";
import { useState } from "react";

// <S>, <T> - generics

const ANIMALS = [
  { id: 1, name: "Dog" },
  { id: 2, name: "Cat" },
  { id: 3, name: "Hamster" },
  { id: 4, name: "Parrot" },
  { id: 5, name: "Spider" },
  { id: 6, name: "Goldfish" },
];

const App = () => {
  const {
    onStartListeningClickOutside,
    onClickOutside,
    waitingOnClickOutside,
  } = useClickOutside();

  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <div className="App">
      {/* on select give chosen option super powers (biggest z-index and backdrop, return to normal if backdrop clicked) */}
      <AnimalList
        animalOptions={ANIMALS}
        clicked={onStartListeningClickOutside}
      />
      <ul>
        {ANIMALS.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
