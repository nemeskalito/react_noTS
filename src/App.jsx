import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List";
const App = () => {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <List array={array} />
    </div>
  );
};

export default App;
