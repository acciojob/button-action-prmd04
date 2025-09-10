
import React, { useState } from "react";
import "../styles/App.css"; // Make sure this file contains .hide and .show classes

const App = () => {
  const [visible, setVisible] = useState(false);

  const hideAndShow = () => {
    setVisible((prev) => !prev); // toggle true/false
  };

  return (
    <div className="App" id="main">
      <p id="para" className={visible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
      </p>
      <button id="click" onClick={hideAndShow}>Click</button>
    </div>
  );
};




export default App
