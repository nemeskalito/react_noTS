import React, { useState, useEffect } from "react";
import "./App.css";

const LifecycleComponentFunc = () => {
  const [count, useCount] = useState(0);
  const [displayCount, useDisplayCount] = useState(0);
  const handleClick = () => {
    const newCount = count + 1;
    useCount(newCount);
    if (newCount % 2 == 0) {
      useDisplayCount(newCount);
    }
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
    console.log(displayCount);
  }, [displayCount]);
  return (
    <div>
      <p> Функциональный компонент</p>
      <div>
        <button onClick={handleClick}>Кликай</button>
        <p>{displayCount}</p>
      </div>
    </div>
  );
};

export default LifecycleComponentFunc;
