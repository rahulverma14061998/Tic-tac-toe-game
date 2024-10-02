import { act, useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";

function App() {
  let [gameTurns, setGameTurns] = useState([]);
  let [active, setActive] = useState("X");

  function handleActive(rowIndex, colIndex) {
    setActive((makeActive) => (makeActive === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
      }
      let updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: active,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName={"player 1"}
              symbol={"X"}
              isActive={active === "X"}
            />
            <Player
              initialName={"player 2"}
              symbol={"O"}
              isActive={active === "O"}
            />
          </ol>
          <GameBoard handleActive={handleActive} gameTurns={ gameTurns} />
        </div>
      </main>
    </>
  );
}

export default App;
