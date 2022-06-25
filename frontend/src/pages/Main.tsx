
import "./main.css";

export default function Main() {
  const url: string = "/auth/login";
  // const url: string = "https://cabi.42cadet.kr";

  return (
    <div className="container">
      <div className="row p-5" id="logo">
        <img src="../img/logo.png" alt="logo" />
      </div>
      <div className="centerTextContainer">
        <div className="centerText">
        안녕하세요! 42cabi 제작팀 입니다 :) <br/> <br/>
        갑작스러운 공지 페이지로 <br/> 놀라게 해드려 죄송해요 😂 <br/> 
        저희 42cabi가 새로운 도메인으로 <br/>이사를 가게 되었답니다 🚛 <br/> <br/> 
        </div>
        <div className="centerText">
          <div className="centerTextSmall">
            변경 전 주소 : https://cabi.dev.42cadet.kr/ <br/>
          </div>
          <div className="centerTextLarge">
            변경 후 주소 : <a href="https://cabidev.42seoul.io/">https://cabidev.42seoul.io/</a> <br/><br/>
          </div>
          새로운 서비스 주소로 보내드릴 테니, <br/>
          새 주소에서,  더욱 슬기롭게! <br/>42cabi 서비스를 이용해주세요 🙇‍♂️ <br/> <br/>
          감사합니다 🚀
        </div>
      </div>
      <div className="row d-grid gap-2 col-6 mx-auto">
				<a className="btn btn-lg" id="loginBtn" href={"https://cabidev.42seoul.io/"}>
          Go To New Cabi
        </a>
				{/* <a className="btn btn-lg" id="loginBtn" href={url}>
          G O !
        </a> */}
      </div>
    </div>
  );
}
