
import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button id="xbtn"
            onClick={(_handleclick) => {
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
            onClick={(_handleclick) => {
              alert('Sure!You are back to the page.');
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