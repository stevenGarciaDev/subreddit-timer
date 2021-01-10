import styled from 'styled-components';

export const Grid = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    position: relative;
    width: 1114px;
`;

export const HoursContainer = styled.div`
    background-image: linear-gradient(to bottom, #fefefe, #e9e9e9);
    border: solid 1px #f3f3f3;
    display: flex;
    height: 52px;
    justify-content: center;
    left: -5px;
    position: relative;
    text-align: center;
    width: 960px;
`;

export const Hour = styled.div`
    align-items: center;
    color: #787878;
    display: flex;
    height: 52px;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 80px;
`;

export const DaysContainer = styled.div`
    position: absolute;
    left: 0px;
    top: 52px;
`;

export const Day = styled.div`
    align-items: center;
    background-color: #1e2537;
    color: white;
    display: flex;
    font-size: 15px;
    height: 40px;
    justify-content: center;
    padding: 15px 46px 14px 49px;
    width: 154px;
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  left: 5px;
  position: relative;
  width: 970px;
`;
