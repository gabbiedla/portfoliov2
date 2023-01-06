import './Mobilenav.css';
import { useState } from 'react';
import e from 'cors';
import { Link } from 'react-scroll';

const Mobilenav = () => {
  //to change burger classes

  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');

  // control menu visiblity
  const [menu_class, setMenuClass] = useState('menu hidden');

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const [isMobileItemClicked, setIsMobileItemClicked] = useState(false);

  // toggle burger menu change

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  // close menu after clicking on nav item
  const closeMenu = () => {
    if (!isMobileItemClicked) {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <div className="mob-nav" stlye={{ width: '100%', height: '100vh' }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <div className={'mobile-items'}>
          <ul className="mob-list">
            <li className="mob-item">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="mob-item">
              <Link
                to="Timeline"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeMenu}
              >
                Experience
              </Link>
            </li>
            <li className="mob-item">
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className="mob-item">
              <Link
                to="References"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                onClick={closeMenu}
              >
                References
              </Link>
            </li>
            <li className="mob-item">
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobilenav;
