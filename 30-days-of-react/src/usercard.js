import React from "react";
import avatar from "./images/rose.jpg";
import "./index.css";

// Function to show month date year

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const date = time.getDate();
  const year = time.getFullYear();
  return `${month} ${date}, ${year}`;
};

// Avatar Component

const UserCard = ({ user: { firstName, lastName, label, image } }) => {
  return (
    <div className="userCard">
      <img className="userAvatar" src={image} alt="userImage" />
      <h2 className="userName">
        {firstName} {lastName}
      </h2>
      <small className="skillLevel">{label}</small>
    </div>
  );
};

const TechList = ({ techs }) => {
  const techList = techs.map((tech) => (
    <p key={tech} style={skillStyle}>
      {tech}
    </p>
  ));
  return techList;
};

const SkillCard = ({ skill }) => {
  return (
    <>
      <h3>SKILLS</h3>
      <div className="skill">
        <TechList techs={skill} />
      </div>
    </>
  );
};

const Footer = ({ copyRight }) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <small>Joined on {copyRight}</small>
      </div>
    </footer>
  );
};

const skillStyle = {
  backgroundColor: "#61dbfb",
  padding: "5px 10px",
  margin: 5,
  fontSize: 14,
  width: "fit-content",
  display: "inline-block",
  borderRadius: 5,
};
const Apps = () => {
  const data = {
    label: "Senior Developer, Japan",
    skills: [
      "HTML",
      "CSS",
      "Sass",
      "JS",
      "React",
      "Redux",
      "Node",
      "MongoDB",
      "Python",
      "Flask",
      "Django",
      "NumPy",
      "Pandas",
      "Data Analysis",
      "MySQL",
      "GraphQL",
      "D3.js",
      "Gatsby",
      "Docker",
      "Heroku",
      "Git",
    ],
    author: {
      firstName: "Endo",
      lastName: "Kazuo",
    },
    date: new Date(),
  };
  const user = {
    ...data.author,
    image: avatar,
    label: data.label,
  };
  return (
    <div className="app">
      <UserCard user={user} />
      <SkillCard skill={data.skills} />
      <Footer copyRight={showDate(data.date)} />
    </div>
  );
};

export default Apps;
