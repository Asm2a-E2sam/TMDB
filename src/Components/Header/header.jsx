import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css'
import {LanguageContext} from '../../context/LanguageContext'
import { useContext } from 'react';
function Header() {
  const { language, setLanguage } = useContext(LanguageContext);

  const ChangeLanguage = () => {
      setLanguage(language === 'EN' ? 'AR' : 'EN');
  }
  return (
    <Navbar expand="lg" className="nav-bg py-2" >
      <Navbar.Brand href="#home" className="fs-0 py-0 my-0"><Link to="/home"><img src="/assets/logo.svg" alt="logo" width="154px" className='logo'/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/movies" className="link">Movies</Link>
            <Link className="link">TV Shows</Link>
            <Link to="/people" className="link">People</Link>
            <Link to="/Favorites" className="link">Favorites</Link>
            <Link className="plus"> + </Link>
            <span className="en" onClick={ChangeLanguage} role='button'>{language}</span>
            {/* <span className="en" role='button'>EN</span> */}
            <Link to="/login" className="link2">Login</Link>
            <Link to="/register" className="link2">Join TMDB</Link>
            <Link className="link2 search"><i className="fas fa-search text-aqua fs-5"></i></Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

