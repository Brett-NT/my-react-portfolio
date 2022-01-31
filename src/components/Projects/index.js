import React, { useState } from 'react';

const Projects = ({ category }) => {
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: 'Travel Agent',
      category: 'projects',
      description:
        'A travel app designed to provide hotels and weather forecasts for a searched city.'
    },
    {
      name: 'Save the Date',
      category: 'projects',
      description:
        'An event-planning app used for organizing important dates.'
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      description:
        'Home page of a fitness instructor website.'
    },
    {
      name: 'Budget Tracker',
      category: 'projects',
      description:
        'A finance app that creates a graph of transaction history.'
    },
    {
      name: 'Password Generator',
      category: 'projects',
      description:
        'A website that generates a password that meets specific criteria.'
    },
    {
      name: 'Note Taker',
      category: 'projects',
      description:
        'A note-taking app.'
    }
  ]);

  const currentProjects = projects.filter(Project => Project.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/projects/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;