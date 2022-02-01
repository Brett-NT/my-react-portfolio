import React, { useState } from 'react';

import { capitalizeFirstLetter } from '../../utils/helpers';

const Projects = ({ category }) => {
  const [currentProject, setCurrentProject] = useState();

  const [projects, setProjects] = useState([
    {
      name: 'Travel Agent',
      category: 'projects',
      description:
        'A travel app designed to provide hotels and weather forecasts for a searched city.',
      photo: `/projects/0.JPG`,
      href: 'https://brett-nt.github.io/travel-agent/'
    },
    {
      name: 'Save the Date',
      category: 'projects',
      description:'An event-planning app used for organizing important dates.',
      photo: `/projects/1.JPG`,
      href: 'https://sleepy-beyond-01219.herokuapp.com/'
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      description:'Home page of a fitness instructor website.',
      photo: `/projects/2.JPG`,
      href: 'https://brett-nt.github.io/run-buddy/'
    },
    {
      name: 'Budget Tracker',
      category: 'projects',
      description:'A finance app that creates a graph of transaction history.',
      photo: `/projects/3.JPG`,
      href: 'https://dry-atoll-67908.herokuapp.com/'
    },
    {
      name: 'Password Generator',
      category: 'projects',
      description:'A website that generates a password that meets specific criteria.',
      photo: `/projects/4.JPG`,
      href: 'https://brett-nt.github.io/password-generator/'
    },
    {
      name: 'Note Taker',
      category: 'projects',
      description:'A note-taking app.',
      photo: `/projects/5.JPG`,
      href: 'https://shielded-escarpment-50719.herokuapp.com/'
    }
  ]);

  return (
    <div>
      <div className="flex-row project-card">
        {console.log(projects)}
        {projects.map((project, i) => {
          console.log(project)
          return <>
          <h1 className="project-name" data-testid="h1tag">{capitalizeFirstLetter(project.name)}</h1>
          <a className='img-link' href={project.href}><img
            src={project.photo}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={project.name}
          />
          </a>
          </>
        })}
      </div>
    </div>
  );
};

export default Projects;