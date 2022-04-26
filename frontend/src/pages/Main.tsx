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
    </div>
  );
}
