import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeadlineSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const Headline = styled.p`
  color: black;
  font-family: Bitter, sans-serif;
  font-size: 38px;
  position: relative;
  text-align: center;
  top: -20px;
`;

export const SubHeadline = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  position: relative;
  top: -68px;
`;

export const CallToActionButton = styled.button`
  align-items: center;
  color: white;
  background-color: ${(props) => props.theme.colors.orange};
  border: none;
  border-radius: 4px;
  display: flex;
  font-family: 'Montserrat-Medium', sans-serif;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  outline: none;
  position: relative;
  text-decoration: none;
  top: -40px;
  width: 217px;
`;

export const DefaultSubreddit = styled.p`
  font-family: 'Montserrat-Medium', sans-serif;
  font-size: 16px;
  margin: 0;
`;

export const HeatMapLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  top: 32px;
`;

export const HeatMapImage = styled.img`
  max-width: 100%;
`;
