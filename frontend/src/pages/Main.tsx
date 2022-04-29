import { DefaultButton } from "../components/DefaultButton";

const logoStyle = {
  display: "flex",
  height: "400px",
  justifyContent: "center",
  alignItems: "center",
};
const Main = () => {
  const backUrl: string = "http://localhost:2424";
  const url: string = backUrl + "/auth/login";

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
      }}
    >
      <img src="../img/logo.png" />
      <DefaultButton Color="#6667ab" isExpired={false}>
        L O G I N
      </DefaultButton>
    </div>
  );
};
export default Main;
