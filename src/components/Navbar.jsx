import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./button/Button";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener[("resize", showButton)];
  return (
    <div className="navbar">
    <div className=" navbar container">
      {/* <div className=" container"> */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" />
          JMXchange
        </Link>
      {/* </div> */}
      {/* <div> */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li className="nav-item">
            <Link to="/" className="nav-links">
              Log in
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Register
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Developers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Company
            </Link>
          </li>
        
          {button ? (
            <Link to="/signin" className="btn-link">
              <Button buttonStyle="btn btn--outline">SIGN IN</Button>
            </Link>
          ) : (
            <Link to="/signup" className="btn-link">
              <Button
                buttonStyle="btn--outline"
                buttonSize="btn--mobile"
              ></Button>
              SIGN UP
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
