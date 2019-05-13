import styled from "styled-components";

export const MyButton = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 1.5px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  text-transform: capitalize;
  transition: all 0.5s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background: palevioletred;
    color: white;
  }
`;
