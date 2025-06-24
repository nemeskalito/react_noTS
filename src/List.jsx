import React, { useState } from "react";
import "./App.css";

const List = (props) => {
  return props.array.map((item, index) => {
    return (
      <div className="list">
        <li key={index}>
          <ListState item={item} />
        </li>
      </div>
    );
  });
};

const ListState = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((value) => !value);
  };
  return (
    <div className="list">
      {props.item}
      {click ? "!!!" : ""}
      <button onClick={handleClick}></button>
    </div>
  );
};

export default List;
