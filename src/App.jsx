import React, { useState, useEffect } from "react";
import "./App.css";
import LifecycleComponent from "./LifeCycleComponent";
import LifecycleComponentFunc from "./LifecycleComponentFunc";
const App = () => {
  const [classVisibility, setClassVisibility] = useState(true);
  const [funcVisibility, setFuncVisibility] = useState(true);

  const handleClickClass = () => {
    setClassVisibility((classVisibility) => !classVisibility);
  };
  const handleClickFunc = () => {
    setFuncVisibility((funcVisibility) => !funcVisibility);
  };

  return (
    <div className="app-display">
      <div className="app-visibility">
        {classVisibility && <LifecycleComponent />}
        <button onClick={handleClickClass}>
          {classVisibility ? "Удалю" : "Восстановлю"}
        </button>
      </div>
      <br />
      <div className="app-visibility">
        {funcVisibility && <LifecycleComponentFunc />}
        <button onClick={handleClickFunc}>
          {funcVisibility ? "Удалить" : "Восстановить"}
        </button>
      </div>
    </div>
  );
};

export default App;
