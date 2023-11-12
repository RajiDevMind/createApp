import React, { useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        website
      </Link>
      <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={openMenu ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
