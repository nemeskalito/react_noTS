import { useState } from "react";
import "./App.css";

function ButtonComponent() {
  const [count, useCount] = useState(0);

  const handleClick = () => {
    useCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Счётчик</button>
      <p>{count}</p>
    </div>
  );
}

export default ButtonComponent
