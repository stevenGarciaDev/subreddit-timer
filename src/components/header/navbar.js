import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav, AppLogo, NavItems, NavbarLink,
} from './navbar.styles';
import DEFAULT_SUBREDDIT from '../../shared/defaultSubreddit';

const Navbar = () => (
  <header>
    <Nav>
      <Link to="/">
        <AppLogo />
      </Link>
      <NavItems>
        <NavbarLink to={`/search/${DEFAULT_SUBREDDIT}`}>Search</NavbarLink>
        <NavbarLink as="a" href="#how-it-works">How it works</NavbarLink>
        <NavbarLink as="a" href="#about">About</NavbarLink>
      </NavItems>
    </Nav>
  </header>
);

export default Navbar;
