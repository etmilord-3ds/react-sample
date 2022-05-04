import * as React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../constants/routes';

type NavbarProps = {
  loggedIn: boolean;
  displayName?: string;
};

const NavBar: React.FC<NavbarProps> = ({ loggedIn, displayName }) => {
  return <div>{!loggedIn && <Link to={LOGIN_ROUTE}>Login</Link>}</div>;
};

export { NavBar };
