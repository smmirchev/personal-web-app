import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FaHome, FaBook } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// --------------- Componenets ------------------->
import Projects from "./Projects";
import Home from "./Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myProjects: [],
      orderBy: "projectName",
      orderDir: "ascending",
      searchText: "",
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.searchProjects = this.searchProjects.bind(this);
  }

  componentDidMount() {
    fetch("./projects.json")
      .then(content => content.json())
      .then(result => {
        const prjs = result.map(item => {
          return item;
        });
        this.setState({
          myProjects: prjs,
        });
      });
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir,
    });
  }

  searchProjects(textInput) {
    this.setState({searchText: textInput});
  }

  render() {
    let order;
    let filterProjects = this.state.myProjects;
    if (this.state.orderDir === "ascending") {
      order = 1;
    } else {
      order = -1;
    }

    filterProjects = filterProjects.sort((a, b) => {
      if (
        a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(project => {
      return (
        project["projectName"].toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        project["software"].toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        project["category"].toLowerCase().includes(this.state.searchText.toLowerCase())
      );
    });

    return (
      <div className="app">
        <Router>
          <header className="app-header">
            <h1 className="site-title">Stefan Mirchev</h1>
            <nav className="menu">
              <ul>
                <li>
                  <Link to="/projects">
                    <FaBook className="fa-icons" size={20} /> Projects
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaHome className="fa-icons" size={21} /> Home
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects
                projectsInfo={filterProjects}
                orderBy={this.state.orderBy}
                orderDir={this.state.orderDir}
                changeOrder={this.changeOrder}
                searchField={this.searchProjects}
              />
            </Route>
          </Switch>
        </Router>
        <footer className="app-footer">
          <p>
            Content, design and layout: Stefan Mirchev <br></br>Projects' code
            and images: Stefan Mirchev
          </p>
          <a href="https://github.com/smmirchev">
            <FaGithub className="fa-icons" size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/stefan-mirchev-a9a909142/">
            <FaLinkedin className="fa-icons" size={20} /> LinkedIn
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
