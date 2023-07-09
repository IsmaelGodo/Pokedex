import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Link className="link-day" to="/">Home</Link>
        </li>
        <li>
          <Link className="link-day" to="/search">Search Pokemons</Link>
        </li>
        <li>
          <Link className="link-day" to="/pokelist">Pokelist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
