import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const gameList = [
  { id: 1, name: "Basketball", personality: "Michael Jordan" },
  { id: 2, name: "Billiard", personality: "Efren Reyes" },
  { id: 3, name: "Golf", personality: "Tiger Woods" },
  { id: 4, name: "Volleyball", personality: "Leila Barros" }
];

ReactDOM.render(<App games={gameList} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
