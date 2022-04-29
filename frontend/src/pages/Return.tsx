import { Container } from "../components/Container";
import { CabiIcon } from "../components/CabiIcon";
import { DefaultButton } from "../components/DefaultButton";
import styled from "styled-components";

const LentInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  height: 30rem;
  margin: 1rem;
`;

const ClickEvent = () => {
  console.log("onClick ClickEvent");
};

const Return = () => {
  return (
    <Container>
      <CabiIcon src={"./img/cabinet.ico"} />
      <LentInfoBox>흰 박스</LentInfoBox>
      <DefaultButton Color="#6667ab" onClick={ClickEvent} isExpired={false}>
        반납하기
      </DefaultButton>
      <DefaultButton Color="#6667ab" onClick={ClickEvent} isExpired={false}>
        비밀번호 메모장
      </DefaultButton>
      <DefaultButton Color="#6667ab" onClick={ClickEvent} isExpired={false}>
        연장하기
      </DefaultButton>
    </Container>
  );
};

export default Return;
