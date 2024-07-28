import React from 'react';
import './SmartScrollSidebar.css';

const SmartScrollSidebar: React.FC = () => {
  return (
    <aside className="smart-scroll-sidebar">
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li>
          <a href="#roles-searching">Roles I'm Searching For</a>
          <ul className="sub-links">
            <li><a href="#full-stack-developer">Full Stack Developer</a></li>
            <li><a href="#automation-engineer">Automation Engineer</a></li>
            <li><a href="#software-quality-analyst">Software Quality Analyst</a></li>
          </ul>
        </li>
        <li><a href="#projects-working-on">Projects I'm Working On</a></li>
        <li><a href="#my-skillset">My Skillset</a></li>
      </ul>
    </aside>
  );
};

export default SmartScrollSidebar;
