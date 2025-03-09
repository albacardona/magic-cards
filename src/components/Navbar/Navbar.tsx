import { NavLink } from 'react-router-dom';
import MagicLogo from '@/assets/magic-logo.svg?react';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo-container">
        <MagicLogo />
      </NavLink>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/favourites">Favourites</NavLink>
          </li>
          <li>
            <NavLink to="/my-collections">My colections</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
