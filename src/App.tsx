import TestComponent from "./TestComponent";
import "./App.css";

import { useClickOutside } from "./useClickOutside";

const App = () => {
  const { onStartListeningClickOutside } = useClickOutside();

  return (
    <div className="App">
      <TestComponent clicked={onStartListeningClickOutside} />
      <div
        style={{ minHeight: "100vh", background: "#347643" }}
        className="frontPage"
      ></div>
    </div>
  );
};

export default App;
