import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="nav-bg py-2" >
      <Navbar.Brand href="#home" className="fs-0 py-0 my-0"><img src="./assets/logo.svg" alt="logo" width="154px" className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="link">Movies</Nav.Link>
            <Nav.Link href="#link" className="link">TV Shows</Nav.Link>
            <Nav.Link href="#projects" className="link">People</Nav.Link>
            <Nav.Link href="#link" className="link">More</Nav.Link>
            <Nav.Link href="#link" className="plus"> + </Nav.Link>
            <span href="#link" className="en">EN</span>
            <Nav.Link href="#link" className="link2">Login</Nav.Link>
            <Nav.Link href="#link" className="link2">Join TMDB</Nav.Link>
            <Nav.Link href="#link" className="link2"><i className="fas fa-search text-aqua fs-5"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;