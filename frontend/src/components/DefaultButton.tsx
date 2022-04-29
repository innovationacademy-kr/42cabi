import styled from "styled-components";

export const DefaultButton = styled.button<{
  Color: string;
  isExpired: boolean;
}>`
  width: 40%;
  height: 50px;
  margin: 8px;
  margin-left: 30%;
  margin-right: 30%;
  min-width: 15rem;
  color: ${(props) => props.Color};
  border: 3px solid ${(props) => props.Color};
  border-radius: ${(props) => props.theme.borderRadius};
  /* pointer-events: none; */

  transition-duration: 0.4s;
  :hover {
    background-color: #d8d4d4;
    cursor: pointer;
  }
`;
