import React, { useState } from "react";
import { AudioClips } from "./audio/audio.js";
import WinnerScreen from "./WinnerScreen.js";
import Board from "./Board";

const Game = () => {
  const [introPlaying, setIntroPlaying] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [showWinnerScreen, setShowWinnerScreen] = useState(false);
  const [winner, setWinner] = useState(""); // Track the winner here

  const handleSplashClick = () => {
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

  return (
    <div>
      {showSplash ? (
        <div className="splash-screen" onClick={handleSplashClick}></div>
      ) : showWinnerScreen ? (
        <WinnerScreen winner={winner} />
      ) : (
        <Board onGameEnd={handleGameEnd} />
      )}
    </div>
  );
};

export default Game;
