import "./EventModal.css";
import { useState } from "react";

export default function EventModal(props: any) {
  const [show, setShow] = useState(true);

  const dismiss = () => {
    setShow(false);
  };

  const dismissAndPrevent = () => {
    setShow(false);
    localStorage.setItem("eventShown", "ok");
  };

  return (
    <div className={show ? "modal" : "modal hidden"} id="eventmodal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              ð ë ë¤ì ëìì¨ 42 Cabi 5ì ì´ë²¤í¸! ð
              <br />
              ëì ê¹ë¶ë¥¼ ì°¾ìë¼!!
            </h5>
          </div>
          <div className="modal-body">
            <p className="eventMessage"> â¼ ì´ë²¤í¸ ê¸°ê° â 5/16 ~ ìì§ ì âï¸ </p>
            <p className="eventMessage">
              {" "}
              â¼ ë¹ì²¨ ì¸ì â 5í (ì´ 10ëª, ì¸ë¹ 10ìë ð°){" "}
            </p>
            <p className="eventMessage">
              {" "}
              â¼ ì¬ë¬¼í¨ ëª©ë¡ìì ë¹ì ì ì¬ë¬¼í¨ì ì¬ì§ì´ ë¬ë¤ë©´..? <br />
              &ensp; ì¬ì§ê³¼ ê¼­ ë§ë ê¹ë¶ð«ë¥¼ ì°¾ìì£¼ì¸ì!! <br />
              &ensp; (ê¹ë¶ë¼ë¦¬ë ìë¡ ë³¼ ì ìë¤ëë°..?)
            </p>
            <p className="eventMessage">
              {" "}
              â¼ ì´ë² ì´ë²¤í¸ë ê¹ë¶ë¥¼ ì§ì  ë§ëì ì¤íë¼ì¸ ì¸ì¦ì·ì ì°ì´ì£¼ì¸ì!
              <br />
              &ensp; ì¸ì¦ì·ð¸ì ì¬ë cabinet ì±ëì ì¬ë¦¬ìë©´ ì ì°©ìì¼ë¡ ë¹ì²¨!!
              <br />
            </p>
            <p className="eventMessage">
              â¼ ìì¸í ì´ë²¤í¸ ì¬í­ì 42Slackì{" "}
              <a
                className="link"
                href="https://42born2code.slack.com/archives/C02V6GE8LD7"
                target="_blank"
              >
                cabinet ì±ë
              </a>
              ì ì°¸ê³ í´ì£¼ì¸ì!
              <br />
            </p>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              id="btn-primary"
              data-bs-dismiss="modal"
              onClick={dismissAndPrevent}
            >
              ìê² ì´ì!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <span className="eventMessage"> - ì´ë²¤í¸ê¸°ê°: 3/01 - 3/31 <br></br> 
- í¹ì´ì¬í­: ì´ë²¤í¸ ê¸°ê° ì¤, ëì¬ê¸°ê°&ì°ì¥ê¸°ê°ì 7ì¼ë¡ ì¡°ì ëì. <br></br>
(ì´ë²¤í¸ì¢ë£ íìë, ë³¸ë ìë¹ì¤ ê¸°ê°ì¸ 30ì¼ë¡ ì¡°ì ë  ìì ì´ëëë¤)<br></br>
- ìì¸í ì´ë²¤í¸ ì¬í­ì 42Slackì <a className="dropdown-item" href="https://42born2code.slack.com/archives/C02V6GE8LD7" target="_blank">cabinet ì±ë</a>ì ì°¸ê³ í´ì£¼ì¸ì! <br></br>
</span> */
}
