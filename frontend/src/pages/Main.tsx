import "./main.css";

export default function Main() {
  const url: string = "/auth/login";
  // const url: string = "https://cabi.42cadet.kr";

  return (
    <div className="container">
      <div className="row p-5" id="logo">
        <img src="../img/logo.png" alt="logo" />
      </div>
      <div className="row d-grid gap-2 col-6 mx-auto">
				<a className="btn btn-lg" id="loginBtn" href={url}>
          D E V L O G I N
        </a>
				{/* <a className="btn btn-lg" id="loginBtn" href={url}>
          G O !
        </a> */}
      </div>
    </div>
  );
}
