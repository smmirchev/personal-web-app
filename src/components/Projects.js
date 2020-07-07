import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      displayImage: "./images/dog.jpg",
      imageIndex: 0,
    };
  }
  render() {
    return (
      <div className="project-page">
        <main className="projects-main">
          <div className="projects-container">
            <ul className="projects-list">
              {this.props.projectsInfo.map((project, key) => (
                <li key={key}>
                  <div className="project-container">
                    <div className="project-images project-item">
                      <img
                        src={project.image}
                        alt="a project thumbnail"
                        className="flex-project-image"
                      ></img>
                    </div>
                    <div className="project-item-text project-item">
                      <h2 className="project-title">{project.projectName}</h2>
                      <p className="project-meta-info">
                        {project.software} <br></br>
                        {project.category}
                      </p>
                      {project.group ? (
                        <p className="group-project">
                          This is a group project, as such I cannot share the
                          code
                        </p>
                      ) : (
                        <a href={project.github}>
                          <FaGithub className="fa-icons" size={20} /> GitHub
                        </a>
                      )}
                      <p className="project-content-info">{project.content}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <div className="search-menu">
          <input
            className="search-box"
            placeholder="Java, Software, Game..."
            type="search"
            onChange={event => this.props.searchField(event.target.value)}
          ></input>

          <div className="dropdown">
            <button className="dropbtn">Sort By</button>
            <div className="dropdown-content">
              <button
                className={this.props.orderBy === "projectName" ? "active" : ""}
                onClick={event =>
                  this.props.changeOrder("projectName", this.props.orderDir)
                }
              >
                Project Name
              </button>
              <button
                className={this.props.orderBy === "category" ? "active" : ""}
                onClick={event =>
                  this.props.changeOrder("category", this.props.orderDir)
                }
              >
                Project Category
              </button>
              <button
                className={this.props.orderBy === "software" ? "active" : ""}
                onClick={event =>
                  this.props.changeOrder("software", this.props.orderDir)
                }
              >
                Project Language
              </button>
              <hr></hr>
              <button
                className={this.props.orderDir === "ascending" ? "active" : ""}
                onClick={event =>
                  this.props.changeOrder(this.props.orderBy, "ascending")
                }
              >
                Ascending
              </button>
              <button
                className={this.props.orderDir === "descending" ? "active" : ""}
                onClick={event =>
                  this.props.changeOrder(this.props.orderBy, "descending")
                }
              >
                Descending
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
