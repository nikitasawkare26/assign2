
import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Main";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
    

  return (
    <div className="App">
      <h1>Hey, click on the open button.</h1>
      <button
        className="openModalBtn"
        onClick={(_handleClick) => {
          alert('You clicked me!');
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
