import React, { useState, useEffect } from "react";
import "./App.css";
import LifecycleComponent from "./LifeCycleComponent";
import LifecycleComponentFunc from "./LifecycleComponentFunc";
const App = () => {
  const [visibility1, useVisibility1] = useState(true);
  const [visibility2, useVisibility2] = useState(true);

  const handleClick1 = () => {
    useVisibility1((visibility1) => !visibility1);
  };
  const handleClick2 = () => {
    useVisibility2((visibility2) => !visibility2);
  };
  const style = {
    border: "1px solid white",
    "border-radius": "20px",
    padding: "20px",
    "min-width": "200px",
  };
  const display = {
    display: "flex",
  };
  return (
    <div style={display}>
      <div style={style}>
        {visibility1 && <LifecycleComponent />}
        <button onClick={handleClick1}>
          {visibility1 ? "Удалю" : "Восстановлю"}
        </button>
      </div>
      <br />
      <div style={style}>
        {visibility2 && <LifecycleComponentFunc />}
        <button onClick={handleClick2}>
          {visibility2 ? "Удалить" : "Восстановить"}
        </button>
      </div>
    </div>
  );
};

export default App;
