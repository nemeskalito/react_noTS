import { useState } from "react";
import "./App.css";

const InputComponent = () => {
  const [text, textUse] = useState("");
  const textVis = (event) => {
    textUse(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={textVis} />
      <p>{text}</p>
    </div>
  );
};

export default InputComponent;
