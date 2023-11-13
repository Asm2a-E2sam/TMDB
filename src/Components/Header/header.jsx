import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./header.css";
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "react-bootstrap";
function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const ChangeLanguage = () => {
    if (language === "EN") {
      localStorage.setItem("lang", "ar");
      setLanguage("AR");
      var children = document.children;
      var i;
      for (i = 0; i < children.length; i++) {
        children[i].style.direction = "rtl";
      }
      // document.dir
    } else {
      localStorage.setItem("lang", "en");
      setLanguage("EN");
      var children = document.children;
      var i;
      for (i = 0; i < children.length; i++) {
        children[i].style.direction = "ltr";
      }
    }
    // setLanguage(language === "EN" ? "AR" : "EN");
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    setIsLogged(false);
  };

  return (
    <Navbar expand="lg" className="nav-bg py-2 pe-2 sticky-top" id="myNav">
      <Navbar.Brand href="#home" className="fs-0 py-0 my-0">
        <Link to="/home">
          <img
            src="/assets/logo.svg"
            alt="logo"
            width="154px"
            className="logo mx-3"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav movie-nav text-white" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me">
          <div>
            <Link to="/movies" className="link  mx-3">
              Movies
            </Link>
            <Link to="/tv" className="link  mx-3">
              TV Shows
            </Link>
            <Link to="/people" className="link mx-3">
              People
            </Link>
            {isLogged && (
              <Link to="/Favorites" className="link mx-3">
                Favorites
              </Link>
            )}
          </div>
          <div>
            <Link className="plus mx-3"> + </Link>
            <span className="en  mx-3" onClick={ChangeLanguage} role="button">
              {language}
            </span>
            {/* <span className="en" role='button'>EN</span> */}
            {!isLogged && (
              <>
                <Link to="/login" className="link2 mx-3">
                  Login
                </Link>
                <Link to="/register" className="link2 mx-3">
                  Join TMDB
                </Link>
              </>
            )}
            {isLogged && (
              <>
                <span className="link2  mx-3">Welcome {user.name}</span>
                <span role="button" onClick={logout} className="link2  mx-3">
                  Logout
                </span>
              </>
            )}
            <Link className="link2 search  mx-3">
              <i className="fas fa-search text-aqua fs-5"></i>
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
