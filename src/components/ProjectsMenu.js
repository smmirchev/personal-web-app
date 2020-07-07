import React, { Component } from "react";

class ProjectsMenu extends Component {
  constructor() {
    super();
    this.state = {
      displayImage: "./images/corb.png",
      imageIndex: 0,
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.incrementIndex(), 7000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  incrementIndex() {
    let imageArray = [
      "./images/corb.png",
      "./images/classification-model.jpg",
      "./images/violence-estimation.png",
    ];

    this.state.imageIndex === imageArray.length - 1
      ? this.setState({ imageIndex: 0 })
      : this.setState(state => ({
          imageIndex: state.imageIndex + 1,
        }));

    this.setState({ displayImage: imageArray[this.state.imageIndex] });
  }

  render() {
    return (
      <section className="projects-menu">
        <div>
          <img src={this.state.displayImage} alt="slideshow of project thumbnails"></img>
        </div>
      </section>
    );
  }
}

export default ProjectsMenu;
