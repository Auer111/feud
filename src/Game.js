import React, { useState } from "react";
import { AudioClips } from "./audio/audio.js";
import WinnerScreen from "./WinnerScreen.js";
import Board from "./Board";
import { GetCategoryData } from "./data.js";

const Game = () => {
  const [introPlaying, setIntroPlaying] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [showWinnerScreen, setShowWinnerScreen] = useState(false);
  const [winner, setWinner] = useState(""); // Track the winner here
  const [categoryData, setCategoryData] = useState(GetCategoryData());
  const [categories, setCategories] = useState([]);

  const handleSplashClick = () => {
    if (categories.length < 5) {
      return;
    }
    if (!introPlaying) {
      setIntroPlaying(true);
      AudioClips.Intro.play();
      setTimeout(() => setShowSplash(false), 31000);
    } else {
      AudioClips.Intro.pause();
      setIntroPlaying(false);
      setShowSplash(false);
    }
  };

  const handleGameEnd = (winningTeam) => {
    setWinner(winningTeam);
    setShowWinnerScreen(true);
  };

  const onSetCategory = (category) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((cat) => cat !== category));
    } else if (categories.length < 5) {
      setCategories([...categories, category]);
    }
  };

  return (
    <div>
      {showSplash && (
        <div className="splash-screen" onClick={handleSplashClick}>
          <div className="category-select">
            <h2>
              {categories.length < 5 && `Pick ${5 - categories.length}`}{" "}
              {5 > categories.length > 0 ? "Categories" : "Play"}
            </h2>
            <div className="items">
              {categoryData.map((c, i) => (
                <button
                  key={i}
                  className={categories.includes(c) ? "selected" : ""}
                  onClick={() => onSetCategory(c)}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {showWinnerScreen && <WinnerScreen winner={winner} />}
      {!showSplash && !showWinnerScreen && (
        <Board categories={categories} onGameEnd={handleGameEnd} />
      )}
    </div>
  );
};

export default Game;
