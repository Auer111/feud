import React, { useState, useEffect } from "react";
import { AudioClips, getAudioClip } from "./audio/audio.js";
import { Teams } from "./data";

const DailyDouble = ({
  id,
  scoreAlpha,
  scoreOmega,
  question,
  answer,
  audio,
  closeModal,
}) => {
  const [bet, setBet] = useState(0);
  const [phase, setPhase] = useState("betting"); // Possible values: "betting", "guessing", "answer"
  const [team, setTeam] = useState("");

  const handleBetSubmit = (e) => {
    e.preventDefault();
    console.log();
    if (
      bet ||
      (team === Teams.Alpha && scoreAlpha === 0) ||
      (team == Teams.Omega && scoreOmega === 0)
    ) {
      AudioClips[audio]?.play();
      setPhase("guessing");
    }
  };

  const handleGuessSubmit = (isCorrect) => {
    setPhase("answer");
    if (!isCorrect) {
      setBet(-bet);
    }
    // Handle score updates and audio clips for correct/wrong guesses here
  };

  const DailyDoubleLogic = (maxScore) => {
    if (phase === "betting") {
      return (
        <div className="betting-phase">
          <input
            type="number"
            value={bet}
            onChange={(e) =>
              setBet(Math.min(parseInt(e.target.value), maxScore))
            }
          />
          <button onClick={handleBetSubmit}>Submit Bet</button>
        </div>
      );
    }

    if (phase === "guessing") {
      return (
        <div className="guessing-phase">
          <button onClick={() => handleGuessSubmit(true)}>👍</button>
          <button onClick={() => handleGuessSubmit(false)}>👎</button>
        </div>
      );
    }

    return null;
  };

  const handleModalClick = () => {
    console.log(phase);
    if (phase === "answer") {
      console.log("close modal", bet);
      closeModal(team, bet);
    }
  };

  const createRevealedCharacters = (str) => {
    let revealed = "";
    for (let i = 0; i < str.length; i++) {
      revealed += str[i] === " " ? " " : "_";
    }
    return revealed;
  };

  return (
    <>
      <div className="tile-modal screen">
        {team === Teams.Alpha && (
          <div className="character">{DailyDoubleLogic(scoreAlpha)}</div>
        )}

        {team === "" && (
          <button className="character" onClick={() => setTeam(Teams.Alpha)}>
            <div className="logo">{Teams.Alpha}</div>
          </button>
        )}

        <div className="modal-content" onClick={handleModalClick}>
          <div
            className={`modal-body tileStyle header ${
              phase === "betting" ? "dd" : ""
            }`}
          >
            {phase === "betting" && <></>}
            {phase === "guessing" && (
              <>
                <p className="question">{question}</p>
                <p className="answer">{createRevealedCharacters(answer)}</p>
              </>
            )}

            {phase === "answer" && <p className="answer">{answer}</p>}
          </div>
        </div>

        {team === Teams.Omega && (
          <div className="character">{DailyDoubleLogic(scoreOmega)}</div>
        )}

        {team === "" && (
          <button className="character" onClick={() => setTeam(Teams.Omega)}>
            <div className="logo">{Teams.Omega}</div>
          </button>
        )}
      </div>
    </>
  );
};

export default DailyDouble;
