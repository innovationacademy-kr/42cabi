import styled from "styled-components";

export const Container = styled.div`
  height: 80%;
  width: 60%;
  top: 5%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  padding: 10px;
  background: #ffffffec;
  border-radius: ${(props) => props.theme.borderRadius};
`;
