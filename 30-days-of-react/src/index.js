import React from "react";
import ReactDOM from "react-dom";

const Number = ({ numbers }) => {
  const list = numbers.map((number) => <li>{number}</li>);
  return list;
};

const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Number numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
