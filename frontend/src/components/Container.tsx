import styled from "styled-components";

export const Container = styled.div`
  height: 95%;
  width: 90%;
  @media screen and (min-width: 600px) {
    width: 75%;
  }
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translate(-50%);
  padding: 10px;
  background: #ffffffec;
  border-radius: 1em;
  justify-content: center;
  background-size: 30px 100px;
  min-height: 80vh;
`;
