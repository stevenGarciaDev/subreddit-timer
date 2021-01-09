import styled from 'styled-components';

export const determineBackgroundColor = (count) => {
  switch (count) {
    case 0:
      return '#e0e592';
    case 1:
      return '#aed396';
    case 2:
      return '#a9d194';
    case 3:
      return '#a0ce93';
    case 4:
      return '#99cd94';
    case 5:
      return '#8cc894';
    case 6:
      return '#5eb391';
    case 7:
      return '#5db492';
    case 8:
      return '#5cb391';
    case 9:
      return '#5aad8c';
    default:
      return '#3984a3';
  }
};

export const Box = styled.button`
    align-items: center;
    background-color: ${(props) => determineBackgroundColor(props.amountOfPosts)};
    border: none;
    color: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    height: 40px;
    outline: none;
    justify-content: center;
    width: 40px;

    &:hover {
        border: 1px solid black;
    }

    &:focus {
        border: 1px solid black;
    }
`;
