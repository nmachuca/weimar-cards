import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar germania-one-regular">
    <div className="navbar__left">
      <h1 className="navbar__title">
        Weimar<span>Cards</span>
      </h1>
    </div>
    <div className="navbar__right">
      <ul className="navbar__links">
        <li className="navbar__link__item">
          <NavLink to="/" exact="true" className="navbar__link">
            Search
          </NavLink>
        </li>
        <li className="navbar__link__item">
          <NavLink to="/gallery" className="navbar__link">
            Gallery
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
