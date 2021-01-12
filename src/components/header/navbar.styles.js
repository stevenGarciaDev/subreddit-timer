import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from './logo.svg';

export const Nav = styled.nav`
    align-items: center;
    display: flex;
    height: 100px;
    padding-left: 10px;
    width: 100%;

    @media screen and (min-width: 600px) {
        justify-content: space-between;
        padding: 0 80px 0;
    }
`;

export const AppLogo = styled(Logo)`
    display: block;
    height: 36px;
    width: 95px;

    @media screen and (min-width: 475px) {
        height: 36px;
        width: 150px;
    }
`;

export const NavItems = styled.div`
    position: relative;
    left: 13px;
`;

export const NavbarLink = styled(NavLink)`
    color: ${(props) => props.theme.colors.brownishGrey};
    font-size: 14px;
    height: 100%;
    padding-left: 8px;
    text-decoration: none;

    @media screen and (min-width: 475px) {
        font-size: 16px;
        padding: 0 13px;
    }
`;
