import { useState } from "react";
import "./App.css";

function ShowText() {
  const [visibility, useVisibility] = useState(true);
  const handleClick = () => {
    useVisibility((prevState) => {
      return !prevState;
    });
  };
  const style = {
    visibility: visibility ? "hidden" : "",
  };

  return (
    <div>
      <button onClick={handleClick}>Включить/Выключить</button>
      <p style={style}>Включай или выключай</p>
    </div>
  );
}

export default ShowText;
