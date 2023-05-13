import './Navbar.css';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="navBar">
      <ul className="nav-ul">
        <li className="nav-item">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closeMenu}
            id="nav-home"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="Timeline"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenu}
            id="nav-timeline"
          >
            Experience
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            onClick={closeMenu}
            id="nav-projects"
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="References"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={closeMenu}
            id="nav-references"
          >
            References
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenu}
            id="nav-contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* <p className="nav-text">Home</p>
      <p className="nav-text">Experience</p>
      <p className="nav-text">Projects</p>
      <p className="nav-text">References</p>
      <p className="nav-text">Contact</p> */}
    </div>
  );
};

export default Navbar;
