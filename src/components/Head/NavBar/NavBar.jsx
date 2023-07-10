import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Link id="link-nav" to="/"><h3>Home</h3>  </Link>
        </li>
        <li>
          <Link id="link-nav" to="/search"><h3>  Search Pokemons</h3>  </Link>
        </li>
        <li>
          <Link id="link-nav" to="/lab"> <h3> Laboratory </h3> </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
