import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './sign.svg';

export const Container = styled.footer`
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: row;
    height: 100px;
    justify-content: space-around;
    padding: 0 67px;
    position: absolute;
    width: 100%;
`;

export const LinkStyles = css`
    color: ${(props) => props.theme.colors.brownishGrey};
    font-size: 14px;
    text-decoration: none;
`;

export const FooterLink = styled(Link)`
    ${LinkStyles}
`;

export const AnchorLink = styled.a`
    ${LinkStyles}
`;

export const AppLogo = styled(Logo)`
    height: 36px;
    position: relative;
    left: 27px;
    width: 36px;
`;
