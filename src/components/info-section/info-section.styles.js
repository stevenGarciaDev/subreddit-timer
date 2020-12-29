import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 140px;
`;

export const InfoContainer = styled.div`
    padding: 10px;
    width: 100%;

    @media screen and (min-width: 900px) {
        padding: 0;
        width: 738px;
    }
`;

export const PageInfoHeader = styled.h2`
    color: black;
    font-family: 'Bitter', sans-serif;
    font-size: 24px;
`;

export const List = styled.ul`
    left: -20px;
    margin-bottom: 65px;
    position: relative;
    top: -10px;
`;

export const ListItem = styled.li`
`;

export const Paragraph = styled.p`
    margin-bottom: 90px;
    margin-top: 5px;
    position: relative;
    top: -10px;
`;

export const InfoLink = styled(Link)`
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;
`;
