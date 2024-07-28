import React from 'react';

interface PortfolioItemProps {
  title: string;
  description: string;
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, link }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default PortfolioItem;
