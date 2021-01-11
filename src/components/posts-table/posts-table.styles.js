import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin-bottom: 275px;
`;

export const Title = styled.h2`
    color: black;
    margin-bottom: 0px;
`;

export const Table = styled.table`
    border-collapse: collapse;
    color: black;
    font-size: 14px;
    margin-top: 12px;
    text-align: left;
`;

export const TableRow = styled.tr`
    border: 1px solid black;
    height: 35px;
`;

export const TableData = styled.td`
    border: 1px solid black;
    padding-left: 12px;
`;

export const TableLink = styled(Link)`
    color: ${(props) => props.theme.link};
    text-decoration: none;

    &:visited {
        color: ${(props) => props.theme.link};
    }
`;

export const Column = styled.col`
    width: ${(props) => props.width};
`;
