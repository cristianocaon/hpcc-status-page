import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
`;

export const TabButton = styled(Link)`
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