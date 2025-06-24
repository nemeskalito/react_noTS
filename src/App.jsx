import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import List from "./List";
const App = () => {
  const textInput = useRef();
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);
  const [focus, setFocus] = useState(false);
  const focusInput = () => {
    textInput.current.focus();
    setFocus(true);
  };

  const addItem = () => {
    const newItem = textInput.current.value;
    if (newItem) {
      setItems([...items, newItem]);
      newItem;
    }
    setFocus(false);
  };

  const handleClick = () => {
    addItem();
    focusInput();
  };
  const keyDown = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };
  return (
    <div>
      <div className="app-list">
        <input ref={textInput} type="text" onKeyDown={keyDown} />
        <button onClick={handleClick}>{focus ? "Add" : "Focus"}</button>
      </div>
      <List array={items} />
    </div>
  );
};

export default App;
