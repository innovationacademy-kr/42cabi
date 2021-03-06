import "./menualModal.css";

export default function MenualModal() {
  return (
    <div className="modal" id="menualmodal" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title align-middle px-10">
              π 42cabi μ΄μ© μλ΄μ
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="menual-body" id="menual-body">
            <ul>
              <li className="py-1">
                1μΈ λΉ 1κ°μ μ¬λ¬Όν¨μ λμ¬ν  μ μκ³ ,
                <br />
                λμ¬κΈ°κ° λμ μμ λ‘­κ² μ¬μ©ν  μ μμ΅λλ€.
                <br />
              </li>
              <li className="py-1">
                λμ¬κΈ°κ°μ λμ¬ν λ λ‘ λΆν° +30μΌ μλλ€.
                <br />
              </li>
              <li className="py-1">
                λ°λ© μ λκ³ κ°λ μμ§νμ΄ μλ μ§ νμΈν΄μ£ΌμΈμ!
                <br />
              </li>
              <li className="py-1">
                λμ¬νμ  μ¬λ¬Όν¨μ λΉλ°λ²νΈλ μ μ₯νμ§
                <br />
                μμΌλ λ°λ‘ κΈ°λ‘ν΄μ£ΌμΈμ.
                <br />
              </li>
              <li className="py-1">
                μ¬λ¬Όν¨μ μν  μ μλ μμλ¬Όμ΄λ μ¬λ¬Όν¨μ΄ <br />
                μ€μΌ λ  μ μλ λ¬Όν λ³΄κ΄μ μμ ν΄μ£ΌμΈμ.
                <br />
              </li>
              <li className="py-1">
                λμ¬ν μ¬λ¬Όν¨μ΄ μ κ²¨ μκ±°λ λΉλ°λ²νΈλ₯Ό <br />
                λΆμ€νμ¨λ€λ©΄ νλ‘ νΈμ Staff νΉμ 42cabi μ¬λ μ±λλ‘
                λ¬Έμν΄μ£ΌμΈμ.
                <br />
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              id="btn-primary"
              data-bs-dismiss="modal"
            >
              Ok! μμμ΄μ!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
