import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StatCard from './StatCard';

const renderCards = (stats: { mainInfo: string, minorInfo: string }[]) => {
  const cards = stats.map((stat: { mainInfo: string, minorInfo: string }, i) => <StatCard key={i} data={stat} />);
  return <>{cards}</>
}

const About = () => {
  const [ghFollowers, setGhFollowers] = useState(8);

  const randomStats = [
    {
      mainInfo: '2.5',
      minorInfo: 'Years of Professional Experience'
    },
    {
      mainInfo: '2015',
      minorInfo: 'Started Programming'
    },
    {
      mainInfo: ghFollowers.toString(),
      minorInfo: 'Github Followers'
    },
    {
      mainInfo: 'React',
      minorInfo: 'Favorite Framework/Library'
    },
    {
      mainInfo: '6',
      minorInfo: 'Countries Visited'
    }
  ];

  useEffect(() => {
    axios.get('https://api.github.com/users/premdav').then((res) => {
      setGhFollowers(res.data.followers);
    });
  }, []);

  return (
    <section id='about' className='section'>
      <h2 className='section-heading'>About</h2>
      <div className='section-underline'></div>
      <div className='section-content'>
        <p>
          Hey, I'm Preston! A software engineer, leading a team of 7, at Valcom, Inc. I work heavily in 
          React, React Native, Node, and Python to build web and mobile applications for internal use and also for our emergency notification platforms.
          When I am not working, I enjoy building out side projects, hanging out with family, and I absolutely love to travel.
        </p>
      </div>
      <h2 className='section-heading'>Random Stats</h2>
      <div className='section-underline'></div>
      <div className='card-section'>
        {renderCards(randomStats)}
      </div>
    </section>
)
};

export default About;
