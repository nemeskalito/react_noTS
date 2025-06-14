import React, { useState, useEffect } from "react";
import "./App.css";

class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  componentDidMount() {
    const fetchData = async () => {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/users"
      );
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }
  componentDidUpdate() {
    console.log(this.state.count);
  }
  componentWillUnmount() {
    console.log("Удалил");
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count && nextState.count % 2 === 0
      ? true
      : false;
  }

  render() {
    return (
      <div>
        <p>Классовый компонент</p>
        <button onClick={this.increment}>Жмякай</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default LifecycleComponent;
