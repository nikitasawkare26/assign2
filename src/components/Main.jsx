
import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button id="xbtn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <p>HEYY! YOU'R REACT DEVELOPER.</p>
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="gobackBtn"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>

    
  );
}

export default Modal;