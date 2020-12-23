import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './sign.svg';

export const Container = styled.div`
    width: 100%;
`;

export const FooterSection = styled.footer`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100px;
    justify-content: space-around;
    padding: 0 20px;
    margin: 0 auto;
    max-width: 980px;
`;

export const FooterLink = styled(Link)`
    color: ${(props) => props.theme.colors.brownishGrey};
    flex: 1;
    font-size: 14px;
    text-decoration: none;
`;

export const AppLogo = styled(Logo)`
    height: 36px;
    position: relative;
    width: 36px;
`;
