import React, { useState, useEffect } from "react";

const Mines = () => {
  const [mines, setMines] = useState([]);
  const rows = mines; // Initialize `row` with `mines`

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // TODO: Mines'ı rastgele dağıt
    setMines(Array(100).fill(false).map((_, i) => {
      return Math.random() < 0.1 ? true : false;
    }));
  }, []);

  const handleClick = (i, j) => {
    // TODO: Kareyi aç
    if (mines[i][j]) {
      // Oyunu kaybed
      console.log("Oyunu kaybettiniz!");
    } else {
      // Kareyi aç
      setSelected([i, j]);
      // Komşu kareleri aç
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x >= 0 && x < 10 && y >= 0 && y < 10) {
            if (mines[x][y]) {
              setMines[x][y] = true;
            } else {
              setMines[x][y] = mines[x][y] ? 0 : mines[x][y] + 1;
            }
          }
        }
      }
    }
  };

  return (
    <div>
      <div className="mines-container">
        {mines.map((row, i) => (
          <div key={i} className="mines-row">
      {rows.map((row, i) => (
        <div key={i}>
          {row.map((mine, j) => (
            <div key={j} className={mine ? "mine" : "empty"}></div>
          ))}
                onClick={() => handleClick(i, j)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mines;
