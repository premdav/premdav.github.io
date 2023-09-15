import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = (): JSX.Element => (
  <footer>
    <a target='_blank' href='https://github.com/premdav'><FontAwesomeIcon size='2x' icon={faGithub} /></a>
    <a target='_blank' href='https://www.linkedin.com/in/preston-davis-016211139/'><FontAwesomeIcon size='2x' icon={faLinkedin} /></a>
  </footer>
)

export default Footer;