import TestComponent from "./TestComponent";
import "./App.css";

import { useClickOutside } from "./useClickOutside";

const App = () => {
  const {
    onStartListeningClickOutside,
    onClickOutside,
    waitingOnClickOutside,
  } = useClickOutside();

  return (
    <div className="App">
      <TestComponent clicked={onStartListeningClickOutside} />
      <ul>
        <li>Dog</li>
        <li>Cat</li>
        <li>Hamster</li>
        <li>Parrot</li>
        <li>Spider</li>
        <li>Goldfish</li>
      </ul>
    </div>
  );
};

export default App;
