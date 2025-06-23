import { useState } from "react";
import "./App.css";

const App = () => {
  const [targetValue, setTargetValue] = useState('')
  const [currentTargetValue, setCurrentTargetValue] = useState('')

  const handleClick = event => {
    // event.target.value — значение элемента, который был непосредственно изменен
    setTargetValue(event.target.value)

    // event.currentTarget.value — значение элемента, к которому привязан обработчик событий
    setCurrentTargetValue(event.currentTarget.value)
  }

  return (
    <div>
      <h1>
        Демонстрация сравнения event.target.value и event.currentTarget.value
      </h1>
      <button value='Parent Button' onClick={handleClick}>
        Parent Button
        <input type='button' value='Child Button' onClick={handleClick} />
      </button>

      <p>event.target.value: {targetValue}</p>
      <p>event.currentTarget.value: {currentTargetValue}</p>
    </div>
  )
}

export default App