import styled from "styled-components";

export const WhiteButtonFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    border: white 3px solid;
  }
`;

export const PurpleButtonFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  a {
    color: #6667ab;
    border: #6667ab 3px solid;
  }
`;

export const CabiButton = styled.div<{ isExpired: boolean }>`
  a {
    display: flex;
    border-radius: 15px;
    height: 40px;
    width: 50vw;
    justify-content: center;
    align-items: center;
  }
  &: hover {
    border-radius: 15px;
    background-color: #d8d4d44b;
  }
  ${(props) =>
    props.isExpired === true &&
    `
    pointer-events: none;
    a{
      color: #9898c6;
      border: #9898c6 3px solid;
    }
    `}
`;
