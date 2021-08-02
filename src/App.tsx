import React from 'react';
import Particles from 'react-particles-js';
import Header from './Components/Header';

const particleOptions = {
  "particles": {
      "number": {
          "value": 100,
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
      <Header />
    </div>
  );
}

export default App;
