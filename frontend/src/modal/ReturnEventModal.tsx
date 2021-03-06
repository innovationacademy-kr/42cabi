import { useState } from "react";
import "./returnEventModal.css";

export default function ReturnEventModal() {
  const [open, setOpen] = useState(true);
  
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <div className={open ? "modal" : "modal hidden"} id="returneventmodal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content returnEvent">
          <div className="modal-header">
            <h5 className="modal-title">
              π 42Cabinet κΉλΆ μ΄λ²€νΈ π
              <br />
              λμ κΉλΆλ₯Ό μ°ΎμλΌ!
            </h5>
          </div>
          <div className="modal-body">
            <div>μΆνν©λλ€π π π π π π </div>
            <div>λΉμ μ κΉλΆ μ΄λ²€νΈμ λΉμ²¨λμμ΅λλ€!</div>
            <div>λ΄ μ¬λ¬Όν¨μ νμΈν΄μ£ΌμΈμ!</div>
            <div>#42seoul_club_cabinet</div>
            <div>~μ±λμμ μ§μ μ°Ύμμ£ΌμΈμ~</div>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-primary returnEventBtn"
              data-bs-dismiss="modal"
              onClick={handleClick}
            >
              νμΈ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
