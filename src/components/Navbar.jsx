import {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" />
          MJXChange
        </Link>
        <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes/> : <FaBars/>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                  Log in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                  Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                  EXplore
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
            <button className="btn">Get the app</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
