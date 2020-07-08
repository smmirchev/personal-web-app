import React, { Component } from "react";

import ImageSlideShow from "./ImageSlideShow";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <ImageSlideShow />
        <main className="home-main">
          {/*----> The Main <----*/}
          <section className="home-content">
            <div className="main-text about-author">
              <h2>About the Author</h2>
              <p>
                I am a University of Essex graduate student with a computer
                science degree – BSc Computer Games. I have deep understanding
                of various advanced programming concepts and practical
                experience in applying these concepts, as shown by my projects.
                I am also confident in my design skills, backed by my photo and
                video editing background and freelance Adobe Photoshop and Adobe
                Premiere projects. Below is a list of my technical expertise:
              </p>
              <ul>
                <li>
                  <b>Web Development:</b> HTML, CSS, JavaScript, ES6, React,
                  SASS.
                </li>
                <li>
                  <b>Software Development:</b> Java, Python, C#.
                </li>
                <li>
                  <b>Other:</b> TDD (Mocha, Chai, JUnit), Git, Jira, Machine
                  Learning, Threads and Synchronization, Computer Vision.
                </li>
              </ul>
            </div>
            <div className="main-text featured-main-text">
              <h2>Featured Projects</h2>
              <p>
                My most challenging projects are software for classifying
                objects in digital images from 1000 categories and software for
                estimating the violence factor of protests. Both projects are
                part of my final-year university project, which achieved
                remarkable results 79.4%. The module is worth 45 credits, due to
                its complexity, unlike the standard 15 credits which every other
                module from my degree is worth. <br></br>
                <br></br>The projects were completed in an Agile software
                development approach, with the use of tools, such as Jira and
                GitLab. The word best describing agile is “iterate”. Instead of
                spending most of the work time into the project developing
                phase, the projects were broken up into small and simple
                versions. In Agile the term used for these versions is minimum
                viable product (MVP). Agile development is essentially putting
                out the MVP and then update it based on feedback.<br></br>
                <br></br> Before I started working on the projects, I did not
                know what a CNN is or how to build a machine learning model or
                program in Python. After my choice for a final-year project I
                spend the first few months learning the Python syntax, machine
                learning and computer vision. My progress was monitored
                regularly, through weekly meetings with the project’s
                supervisor. The weekly meetings feedback ensured that I was on
                the right path. These weekly meeting evolved from PowerPoint
                presentations to presenting code. <br></br>
                <br></br>A lot of research and coding was needed to successfully
                develop such projects, especially because I was not familiar
                with the machine learning concepts when I started. The end
                result was successfully developed projects, applicable to
                solving real-world tasks.
              </p>
            </div>
          </section>
          <section className="home-featured">
            <div className="featured-projects">
              <h3>ImageNet Object Identification</h3>
              <a href="https://github.com/smmirchev/ImageNet-Object-Identification">
                <img
                  src="./images/classification-model.jpg"
                  alt="a project poster"
                ></img>
              </a>

              <p>
                The project consists of a machine learning model coded in Python
                with the help of the neural-network libraries Keras and
                Tensorflow on the backend.The model was trained on an{" "}
                <a href="http://www.image-net.org/">ImageNet</a> dataset,
                consisting of approximately 1.3 million images, divided into
                1000 categories. The model achieved 84% accuracy on the testing
                data and is able to accurately predict objects in images, if
                these objects are within the 1000 categories. To allow for a
                better presentation and more user-friendly interface the project
                was build using Python Flask and deployed to the web with the
                help of JavaScript
              </p>
            </div>
            <div className="featured-projects">
              <h3>Protest Violence Estimation</h3>
              <a href="https://github.com/smmirchev/protest-violence-estimation">
                <img
                  src="./images/violence-estimation.png"
                  alt="protests with estimated violence factor"
                ></img>
              </a>

              <p>
                The project, first described in{" "}
                <a href="https://arxiv.org/abs/1709.06204">Original Paper</a> -{" "}
                <a href="https://github.com/wondonghyeon/protest-detection-violence-estimation">
                  GitHub repository
                </a>
                , aims to create a machine learning model capable of calculating
                the violence factor in digital images of protests and other such
                activities. The project is intended to be part of the{" "}
                <a href="https://www.upf.edu/web/courage">Courage Project</a>{" "}
                which aims to educate teenage students in facing the treats of
                social media – hate speech, fake news, bullying etc. The
                software achieved excellent results, as shown in the thumbnail,
                with a Mean Squared Error (MSE) value of 0.0038.
              </p>
            </div>
          </section>
        </main>
        <aside className="home-side-bar">
          <div className="sides">
            <h3>The Website</h3>
            <p>
              This web app is created with the revolutionary JavaScript
              framework – React. The entire app is built as a single page
              application (SPA), using Routing to provide a better uninterrupted
              user experience (UX). To further improve the UX, this
              mobile-friendly user interface (UI) is designed with the advanced
              CSS layouts – Grid and Flexbox. Not all users use the same devices
              to browse the web. Therefore, the site layout will responsively
              change depending on the viewport.
            </p>
          </div>
          <div className="sides">
            <h3>The Projects</h3>
            <p>
              The projects shown on the project page are some of my university
              projects. The School of Computer Science and Electronic
              Engineering at the University of Essex is committed to educate its
              students to become computing professionals. Programming is one of
              the highly prized, if not the most prized technical skill. To
              properly learn programming, most of the university projects do not
              allow the use of third-party libraries, which save a lot of time
              but do not teach the logic behind the functionality they provide.
              All the projects shown are coded from scratch without the use of
              any third-party libraries, except for the featured projects.
            </p>
          </div>
        </aside>
      </div>
    );
  }
}

export default Home;
