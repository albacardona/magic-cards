import { NavLink } from 'react-router-dom';
import MagicLogo from '@/assets/magic-logo.svg?react';
import './Navbar.scss';
import { type PropsWithChildren, useState } from 'react';

const LiElement = ({ children }: PropsWithChildren) => {
  const [hover, setHover] = useState<boolean>(false);

  const hoverStyle = {
    textDecoration: hover ? 'underline' : 'none',
    textUnderlineOffset: '22px',
    textDecorationThickness: '2px',
  };

  return (
    <li style={hoverStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </li>
  );
};

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo-container">
        <MagicLogo className="logo" />
      </NavLink>
      <div className="nav-links">
        <ul>
          <LiElement>
            <NavLink to="/favourites">Favourites</NavLink>
          </LiElement>
          <LiElement>
            <NavLink to="/my-collections">My collections</NavLink>
          </LiElement>
        </ul>
      </div>
    </nav>
  );
};
