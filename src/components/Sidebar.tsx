import React from 'react';
import './Sidebar.css';
import ProfilePhoto from '../assets/profile-photo.jpg';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <img src={ProfilePhoto} alt="Profile" className="profile-photo" />
      <p>Hello, I'm Timothy Dean. I'm a Full Stack Developer with a passion for automation and improving software quality.</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/timothy-p-dean/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/timdean27" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="mailto:Timdean29@gmail.com">Email</a></li>
        <li><a href="https://docs.google.com/document/d/1MS_K-Ead2jcw-TG3Yg9GPnyi-aac15e1-FOI5Uer5jY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
