import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from './logo.svg';

export const Nav = styled.nav`
    align-items: center;
    display: flex;
    height: 100px;
    justify-content: space-between;
    padding: 0 80px 0;
    width: 100%
`;

export const AppLogo = styled(Logo)`
    display: block;
    height: 36px;
    width: 150px;
`;

export const NavItems = styled.div`
    position: relative;
    left: 13px;
`;

export const NavbarLink = styled(NavLink)`
    color: ${(props) => props.theme.colors.brownishGrey};
    font-size: 16px;
    height: 100%;
    padding: 0 13px;
    text-decoration: none;
`;
