import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

const Nav = styled.nav`
    align-items: center;
    display: flex;
    height: 100px;
    justify-content: space-between;
    margin: 0 0 27px;
    padding: 0 80px 0;
    width: 100%
`;

const AppLogo = styled(Logo)`
    display: block;
    height: 36px;
    width: 150px;
`;

const NavItems = styled.div`
    position: relative;
    left: 13px;
`;

const NavbarLink = styled(NavLink)`
    color: ${(props) => props.theme.colors.brownishGrey};
    font-size: 16px;
    padding: 0 13px;
    text-decoration: none;
`;

const Navbar = () => (
  <Nav>
    <div>
      <NavLink to="/">
        <AppLogo />
      </NavLink>
    </div>
    <NavItems>
      <NavbarLink to="/search/javascript">Search</NavbarLink>
      <NavbarLink to="/#how-it-works">How it works</NavbarLink>
      <NavbarLink to="/#about">About</NavbarLink>
    </NavItems>
  </Nav>
);

export default Navbar;
