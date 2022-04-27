import {
  CabiButton,
  WhiteButtonFrame,
  PurpleButtonFrame,
} from "../components/CabiButton";
import "./main.css";

export type userInfo = {
  user_id: number;
  intra_id: string;
  auth?: boolean;
  email: string;
  phone?: string;
  access: string;
  refresh: string;
};

export default function Main() {
  const backUrl: string = "http://localhost:2424";
  const url: string = backUrl + "/auth/login";

  return (
    <div id="logo-frame">
      <div id="logo">
        <img src="../img/logo.png" alt="logo" />
      </div>
      <div id="button-frame">
        <a id="loginBtn" href={url}>
          L O G I N
        </a>
      </div>
      <WhiteButtonFrame>
        <CabiButton isExpired={false}>
          <a href={url}>반 납 하 기</a>
        </CabiButton>
      </WhiteButtonFrame>
      <PurpleButtonFrame>
        <CabiButton isExpired={false}>
          <a href={url}>연 장 가 능</a>
        </CabiButton>
      </PurpleButtonFrame>
      <PurpleButtonFrame>
        <CabiButton isExpired={true}>
          <a href={url}>연 장 불 가</a>
        </CabiButton>
      </PurpleButtonFrame>
    </div>
  );
}
