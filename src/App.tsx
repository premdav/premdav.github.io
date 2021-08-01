import React from 'react';
import Particles from 'react-particles-js';
import avatar from './assets/avataaars.png';

const particleOptions = {
  "particles": {
      "number": {
          "value": 60,
          "density": {
              "enable": true,
              "value_area": 1500
          }
      },
      "line_linked": {
          "enable": true,
          "opacity": 0.02
      },
      "move": {
          "direction": "right",
          "speed": 0.05
      },
      "size": {
          "value": 1
      },
      "opacity": {
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1
          }
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "push"
          }
      },
      "modes": {
          "push": {
              "particles_nb": 1
          }
      }
  },
  "retina_detect": true
}

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Particles className='particles'
        params={particleOptions as any}
      />
      <header className="App-header">
        <img className='avatar' src={avatar} alt='Profile Avatar' />
        <h1 className='name-headline'>Preston Davis</h1>
        <p className='quick-about'>Follower of Christ. Software Engineer. Coffee Enthusiast.</p>
        <p className='placeholder'>This is a placeholder page until the site is finished :)</p>
      </header>
    </div>
  );
}

export default App;
