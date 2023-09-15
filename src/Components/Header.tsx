import avatar from '../assets/avataaars.png';

const Header = () => (
  <header className="App-header">
    <img className='avatar' src={avatar} alt='Profile Avatar' />
    <h1 className='name-headline'>Preston Davis</h1>
    <p className='quick-about'>Follower of Christ. Software Engineer. Coffee Enthusiast.</p>
  </header>
);

export default Header;
