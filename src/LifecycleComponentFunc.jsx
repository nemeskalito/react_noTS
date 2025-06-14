import React, { useState, useEffect } from "react";
import "./App.css";

const LifecycleComponentFunc = () => {
  const [count, useCount] = useState(0);
  const handleClick = () => {
    useCount((count) => ++count);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/users"
      );
      const data = await response.json();
      console.log(data);
    };
    fetchData();
    return () => {
      console.log("Удалено");
    };
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <p> Функциональный компонент</p>
      <div>
        <button onClick={handleClick}>Кликай</button>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default LifecycleComponentFunc;
