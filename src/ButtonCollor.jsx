import { useState } from "react";
import "./App.css";

const ButtonComponent = () => {
  const [color, useColor] = useState("white");
  const colorChange = () => {
    useColor((color) => {
      return color == "white" ? "red" : "white";
    });
  };
  const style = {
    color: color,
  };
  return (
    <div>
      <button onClick={colorChange}>Меняй</button>
      <p style={style}>Текст, который меняет цвет</p>
    </div>
  );
};

export default ButtonComponent;
