import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  width: 100%;
  flex-direction: row;
  flex: 1;
  align-items: center;
  align-content: center;
  position: relative;
  margin-top: 1em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

export const TabButton = styled.a`
  float: left;
  display: block;
  color: #000000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background-color: #bebbbb;
    color: black;
  }
  &:active {
    background-color: #d72638;
    color: white;
  }
`;