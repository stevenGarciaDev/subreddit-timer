import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav, AppLogo, NavItems, NavbarLink,
} from './navbar.styles';

const Navbar = () => (
  <header>
    <Nav>
      <Link to="/">
        <AppLogo />
      </Link>
      <NavItems>
        <NavbarLink to="/search/javascript">Search</NavbarLink>
        <NavbarLink to="/#how-it-works">How it works</NavbarLink>
        <NavbarLink to="/#about">About</NavbarLink>
      </NavItems>
    </Nav>
  </header>
);

export default Navbar;
