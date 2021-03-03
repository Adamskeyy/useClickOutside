// components
import AnimalList from "./components/AnimalList";
import AnimalSelect from "./components/AnimalSelect";
import Backdrop from "./components/Backdrop";
// styles
import "./App.css";
// tools
import { useClickOutside } from "./hooks/useClickOutside";
import { useState, useMemo } from "react";

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
  const isBackdropOpen = useMemo(() => waitingOnClickOutside(), [
    waitingOnClickOutside,
  ]);
  // const [showBackdrop, setShowBackdrop] = useState<boolean>(false);

  return (
    <div className="App">
      <Backdrop show={isBackdropOpen} onClickOutside={onClickOutside} />
      <AnimalSelect
        animalOptions={ANIMALS}
        clicked={(event: React.ChangeEvent<{ value: string }>) => {
          setSelectedValue(event.target.value);
          onStartListeningClickOutside();
          console.log(isBackdropOpen);
        }}
      />
      <AnimalList selectedValue={selectedValue} animalOptions={ANIMALS} />
    </div>
  );
};

export default App;
