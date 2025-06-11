import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// function App() {
//   const str = "Hello world!";
//   const num = 25;
//   const boolean = true;
//   const obj = {};
//   const func = () => {};
//   const arr = [1, 2, 3, 4, 5];
//   return (
//     (<Hello str={str} />),
//     (<Num num={num} />),
//     (<Boolean bool={boolean} />),
//     (<Obj obj={obj} />),
//     (<Func func={func} />),
//     (<Arr arr={arr} />)
//   );
// }

// function Hello({ str }) {
//   return <div>{str}</div>;
// }
// function Num({ num }) {
//   return <button>{num}</button>;
// }
// function Boolean({ boolean }) {
//   return <p>{boolean}</p>;
// }
// function Obj({ obj }) {
//   return <div>{obj}</div>;
// }
// function Func({ func }) {
//   return <div>{func}</div>;
// }
// function Arr({ arr }) {
//   return <div>{arr}</div>;
// }
// export default Hello;
function App() {
  const str = "Hello world!";
  const num = 25;
  const boolean = true;
  const obj = {};
  const func = () => {};
  const arr = [1, 2, 3, 4, 5];
  return (
    (<Hello str={str} />),
    (<Num num={num} />),
    (<Boolean bool={boolean} />),
    (<Obj obj={obj} />),
    (<Func func={func} />),
    (<Arr arr={arr} />)
  );
}
function Hello({ str }) {
  return <div>{str}</div>;
}
function Num({ num }) {
  return <button>{num}</button>;
}
function Boolean({ boolean }) {
  return <p>{boolean}</p>;
}
function Obj({ obj }) {
  return <div>{obj}</div>;
}
function Func({ func }) {
  return <div>{func}</div>;
}
function Arr({ arr }) {
  return <div>{arr}</div>;
}
