import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import sample from "./video.mp4";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <App />
    <video className="videoTag" autoPlay loop muted>
      <source src={sample} type="video/mp4" />
    </video>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
