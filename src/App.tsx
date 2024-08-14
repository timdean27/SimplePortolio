import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SmartScrollSidebar from "./components/SmartScrollSidebar";
import FooderGif from "./assets/Fooder.gif";
import ChurchConcertGif from "./assets/ChurchConcert.gif";
import CheckersAppGif from "./assets/CheckersApp.gif";
// import SneakerAppGif from './assets/SneakerApp.gif';
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <SmartScrollSidebar />
        <main>
          <section id="about-me">
            <h3>About Me</h3>
            <p>
              Hello! I'm Timothy Dean, a passionate Software Engineer with a
              strong interest in automation and testing. I graduated from Stony
              Brook University with a Bachelor's in Business Management and
              Accounting and an Associate's degree in Mathematics. I have five
              years of experience across the insurance, quality assurance, and
              accounting sectors.
            </p>
            <p>
              I've completed General Assembly's immersive software engineering
              program. Professionally, I've worked extensively with Python,
              JavaScript, and TypeScript, building front-end applications with
              React, creating APIs using Django and Express, and testing using
              Selenium and Playwright.
            </p>
          </section>
          <section id="roles-searching">
            <h3>Roles I'm Searching For</h3>
            <ul>
              <li id="full-stack-developer">
                Full Stack Developer
                <p>
                  With extensive experience in JavaScript, TypeScript, React,
                  Django, and SQL, I have successfully developed and maintained
                  several full-stack applications. My passion for creating
                  seamless user experiences and robust backend systems makes me
                  a great fit for this role.
                </p>
              </li>
              <li id="automation-engineer">
                Automation Engineer
                <p>
                  I have a strong background in automation, including hands-on
                  experience with Playwright and Selenium. My ability to streamline
                  processes and improve efficiency through automation aligns
                  well with the responsibilities of an Automation Engineer.
                </p>
              </li>
              <li id="software-quality-analyst">
                Software Quality Analyst
                <p>
                  My keen attention to detail and thorough understanding of
                  software development lifecycle (SDLC) enable me to identify
                  and troubleshoot application issues effectively. I have a
                  track record of improving software quality through rigorous
                  testing and quality assurance practices.
                </p>
              </li>
            </ul>
          </section>
          <section id="projects-working-on">
            <h3>Projects I'm Working On</h3>
            <div className="project-grid">
              <div className="project-item">
                <img
                  src={FooderGif}
                  alt="Fooder Project"
                  className="project-image"
                />
                <div className="project-text">
                  <p>Fooder App</p>
                  <p>
                    A mobile app for food lovers to discover and share new
                    recipes.
                  </p>
                </div>
              </div>
              <div className="project-item">
                <img
                  src={ChurchConcertGif}
                  alt="Church Concert Project"
                  className="project-image"
                />
                <div className="project-text">
                  <p>Ticketing App for Local Church</p>
                  <p>
                    An app for managing concert tickets and events for a local
                    church.
                  </p>
                </div>
              </div>
              <div className="project-item">
                <img
                  src={CheckersAppGif}
                  alt="Checkers App Project"
                  className="project-image"
                />
                <div className="project-text">
                  <p>Checkers</p>
                  <p>
                    A classic checkers game built with React and TypeScript.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="my-skillset">
            <h3>My Skillset</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Django</li>
              <li>MySQL , Postgresql</li>
              <li>Automation (PlayWright, Selenium)</li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
