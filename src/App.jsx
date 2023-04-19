import React from "react";
import ReactDOM from "react-dom/client";
import Title from "./Title";
import Game from "./Game";
import Modal from "./Rules";

function App() {
  return (
    <main>
      <Game></Game>
      <Modal></Modal>
    </main>
  );
}

export default App;
