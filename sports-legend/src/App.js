import React from "react";
import "./App.css";

const App = ({ games }) => (
  <ul>
    {games.map(game => (
      <li key={game.id}>
        {game.name} ({game.personality})
      </li>
    ))}
  </ul>
);

export default App;
