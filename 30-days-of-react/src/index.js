import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import avatar from "./images/avatar.png";

// Header class component
class Header extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;
    const styles = this.props.styles;
    return (
      <header style={styles}>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

// Technology List Component
class TechList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { techs } = this.props;
    const techsList = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsList;
  }
}

const UserModel = ({ user: { firstName, lastName, avatar_image } }) => (
  <div className="avatar">
    <img src={avatar_image} alt="avatar" />
    <h4 className="avatar_name">
      {firstName} {lastName}
    </h4>
  </div>
);

// Main Class Component
class Main extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const {
      techs,
      user,
      greetPeople,
      showTime,
      changeBackground,
      styles,
      changeAvatar,
    } = this.props;
    return (
      <main style={styles}>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserModel user={user} />
          <button onClick={greetPeople}>Greet People</button>
          <button onClick={showTime}>Show Time</button>
          <button onClick={changeBackground}>Change Background</button>
          <button onClick={changeAvatar}>Change Avatar</button>
        </div>
      </main>
    );
  }
}

// Footer Class Component
class Footer extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer style={this.props.style}>
        <div className="footer-wrapper">Copyright 2022</div>
      </footer>
    );
  }
}
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {
    count: 0,
    styles: {
      color: "",
      backgroundColor: "",
      borderBottom: "",
    },
    image: avatar,
  };
  greetPeople = () => {
    alert("Welcome to the 30 days of React!");
  };

  showTime = (time) => {
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
    const year = time.getFullYear();
    const date = time.getDate();

    return `${month} ${date}, ${year}`;
  };

  handleTime = () => {
    alert(this.showTime(new Date()));
  };

  changeBackground = () => {
    this.setState({ count: this.state.count + 1 });
    let count = this.state.count;

    if (count % 2 === 0) {
      this.setState({
        styles: {
          backgroundColor: "#0c1f24",
          color: "white",
          borderBottom: "1px solid #fff",
        },
      });
    } else {
      this.setState({ styles: { color: "#000" } });
    }
  };

  changeAvatar = () => {
    let woman01URL = "https://kyampus.com/images/1666582953.jpeg";
    // let woman02URL = "https://kyampus.com/images/1666941523.jpeg";
    let avatar_image = this.state.image === avatar ? woman01URL : avatar;
    console.log(avatar_image);
    this.setState({ image: avatar_image });
    return avatar_image;
  };
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Endo",
        lastName: "Hayase",
      },
      date: "Dec 10, 2022",
    };

    const techs = ["HTML", "CSS", "JavaScript"];
    let avatarImage = this.state.image;
    const user = { ...data.author, avatar_image: avatarImage };

    const styles = this.state.styles;
    return (
      <div className="App">
        <Header data={data} styles={styles}></Header>
        <Main
          techs={techs}
          user={user}
          greetPeople={this.greetPeople}
          showTime={this.handleTime}
          changeBackground={this.changeBackground}
          changeAvatar={this.changeAvatar}
          styles={styles}
        />
        <Footer style={styles} />
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
