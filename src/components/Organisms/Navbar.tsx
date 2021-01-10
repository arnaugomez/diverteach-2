import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

import './Navbar.css';
import Button from '../Atoms/Button';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={`navbar ${location.pathname === "/dashboard"&& 'navbar--dashboard'}`}>
      <section className="navbar__left">
        <Link to="/">
          <h1 className="navbar__logo-title logo-font">DiverTeach</h1>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className={`navbar__hamburger ${open && 'navbar__hamburger--open'}`}
        >
          &#9776;
        </button>
      </section>
      <section
        className={`navbar__right navbar__right--${open ? 'open' : 'closed'}`}
      >
        <Link to="/dashboard" className="navbar__link">
          Tauler
        </Link>
        <Link to="/opos" className="navbar__link">
          Prepara't
        </Link>
        <Button>Entra amb Google</Button>
      </section>
    </nav>
  );
};

export default Navbar;
