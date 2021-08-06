import React from 'react';
import nomadLogo from '../assets/nomadLogo.png';

const personalProjects = [
  {
    name: 'Outbnd',
    info: 'Outbnd is a web and mobile travel app suite dedicating to helping users plan their next trip, track their previous experiences, and create city guides for other users. It also includes a rich community within!',
    image: <img src={nomadLogo} alt='Nomad Co Logo' />
  }
]

const Projects = () => (
  <section id='projects' className='section'>
    <h2 className='section-heading'>Projects</h2>
    <div className='section-underline'></div>
    <div className='section-content'>
      
    </div>
  </section>
);

export default Projects;
