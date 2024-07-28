import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SmartScrollSidebar from './components/SmartScrollSidebar';
import FooderGif from './assets/Fooder.gif';
import ChurchConcertGif from './assets/ChurchConcert.gif';
import CheckersAppGif from './assets/CheckersApp.gif';
import SneakerAppGif from './assets/SneakerApp.gif';
import './index.css';

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
              Full Stack Developer with a background in Business Management and Accounting. Passionate about automation and improving software quality.
            </p>
          </section>
          <section id="roles-searching">
            <h3>Roles I'm Searching For</h3>
            <ul>
              <li id="full-stack-developer">Full Stack Developer</li>
              <li id="automation-engineer">Automation Engineer</li>
              <li id="software-quality-analyst">Software Quality Analyst</li>
            </ul>
          </section>
          <section id="projects-working-on">
            <h3>Projects I'm Working On</h3>
            <div className="project-grid">
              <div className="project-item">
                <img src={FooderGif} alt="Fooder Project" className="project-image" />
                <div className="project-text">
                  <p>Fooder App</p>
                  <p>A mobile app for food lovers to discover and share new recipes.</p>
                </div>
              </div>
              <div className="project-item">
                <img src={ChurchConcertGif} alt="Church Concert Project" className="project-image" />
                <div className="project-text">
                  <p>Ticketing App for Local Church</p>
                  <p>An app for managing concert tickets and events for a local church.</p>
                </div>
              </div>
              <div className="project-item">
                <img src={CheckersAppGif} alt="Checkers App Project" className="project-image" />
                <div className="project-text">
                  <p>Checkers</p>
                  <p>A classic checkers game built with React and TypeScript.</p>
                </div>
              </div>
              <div className="project-item">
                <img src={SneakerAppGif} alt="Sneaker App Project" className="project-image" />
                <div className="project-text">
                  <p>Sneaker App</p>
                  <p>An app for sneaker enthusiasts to track and buy the latest releases.</p>
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
              <li>SQL</li>
              <li>Automation (UiPath, Selenium)</li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
