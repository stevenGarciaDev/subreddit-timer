import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 200px); 
`;

export const Form = styled.form`
  position: relative;
  top: -40px;
`;

export const Input = styled.input`
  border: 1px solid #d5d5d5;
  color: black;
  font-size: 14px;
  height: 36px;
  margin: 0px 10px;
  outline: none;
  padding-left: 16px;
  width: 370px;
`;

export const SubredditLabel = styled.label`
  color: #9e9e9e;
  font-size: 18px;
  position: relaive;
  left: 5px;
`;

export const SearchButton = styled.button`
  background-color: ${(props) => props.theme.colors.orange};
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  height: 36px;
  outline: none;
  text-align: center;
  width: 92px;
`;

export const ErrorMessage = styled.h2`
  text-align: center;
`;
