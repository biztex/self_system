import React from "react";
import ReactDOM from "react-dom";

const numbers = [1, 2, 3, 4, 5];

const skills = [
  ["HTML", 10],
  ["CSS", 10],
  ["React", 2],
];

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavik" },
];

// Number component
const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => <li key={number}>{number}</li>);
  return list;
};
// Skill Component
const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}
  </li>
);

// Skills Component
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill key={skill} skill={skill} />);
  console.log(skillsList);
  return <ul>{skillsList}</ul>;
};

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ));
  return <div>{countryList}</div>;
};
const App = () => {
  return (
    <div className="container">
      <h1>Mapping</h1>
      <ul>
        <Numbers numbers={numbers} />
      </ul>
      <Skills skills={skills} />
      <Countries countries={countries} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
