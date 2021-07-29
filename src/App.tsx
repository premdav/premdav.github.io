import React from 'react';
import Navigation from './Components/Navigation';
import avatar from './assets/avataaars.png';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img className='avatar' src={avatar} alt='Profile Avatar' />
        <h1 className='name-headline'>Preston Davis</h1>
        <p className='quick-about'>Follower of Christ. Lover of coffee. Builder of things.</p>
        <p style={{ fontSize: '.8rem'}}>(this site is under construction. please bear with me)</p>
      </header>
    </div>
  );
}

export default App;
