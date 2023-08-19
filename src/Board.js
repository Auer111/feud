import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import TileModal from "./TileModal";
import { questionsAndAnswersWithIds, CategoryEnum, Teams } from "./data"; // Import the questionsAndAnswersWithIds and CategoryEnum
import { AudioClips } from "./audio/audio";
import DailyDouble from "./DailyDouble";

const Board = ({ onGameEnd }) => {
  // For demonstration purposes, let's define some sample categories and points.
  const categories = Object.values(CategoryEnum); // Get an array of all categories from the CategoryEnum object

  const [questionsAndAnswers, setQuestionsAndAnswers] = useState(
    questionsAndAnswersWithIds
  );
  const [activeTileId, setActiveTileId] = useState(null);
  const [selectedQA, setSelectedQA] = useState(null);
  const [scoreAlpha, setScoreAlpha] = useState(0);
  const [scoreOmega, setScoreOmega] = useState(0);
  const [fillId, setFillId] = useState(1);

  const handleCategoryClick = () => {
    //initilize board
  };

  useEffect(() => {
    AudioClips.Fill.play();

    setQuestionsAndAnswers(
      questionsAndAnswers.map((qa) => ({ ...qa, used: true }))
    );
    setFillId(1);
    setTimeout(() => setFillId(activateTile()), 1000);
  }, []);

  useEffect(() => {
    //initilize board
    if (fillId > 1) {
      setTimeout(() => setFillId(activateTile()), 90);
    }
  }, [fillId]);

  const activateTile = () => {
    if (fillId <= questionsAndAnswers.length) {
      setQuestionsAndAnswers(
        questionsAndAnswers.map((qa) =>
          qa.id === fillId ? { ...qa, used: false } : qa
        )
      );
    }
    return fillId + 1;
  };

  const handleTileClick = (qa) => {
    if (activeTileId === qa.id) {
      setActiveTileId(null);
      setSelectedQA(null);
    } else {
      setActiveTileId(qa.id);
      setSelectedQA(qa);
    }
  };

  const closeModal = (team, points) => {
    if (selectedQA) {
      const updatedQuestionsAndAnswers = questionsAndAnswers.map((qa) =>
        qa.id === selectedQA.id ? { ...qa, used: true } : qa
      );

      if (team === Teams.Alpha) {
        setScoreAlpha((prevScore) => prevScore + points);
      } else if (team === Teams.Omega) {
        setScoreOmega((prevScore) => prevScore + points);
      }

      setQuestionsAndAnswers(updatedQuestionsAndAnswers);
      setActiveTileId(null);
      setSelectedQA(null);
    }
  };

  useEffect(() => {
    if (
      (scoreAlpha > 0 || scoreOmega > 0) &&
      questionsAndAnswers.every((qa) => qa.used)
    ) {
      const winningTeam = scoreAlpha > scoreOmega ? Teams.Alpha : Teams.Omega;
      onGameEnd(winningTeam); // Call the onGameEnd function with the winning team
    }
  }, [scoreAlpha, scoreOmega]);

  return (
    <div className="screen">
      {!activeTileId && (
        <div className="character">
          <div className="logo">{Teams.Alpha}</div>
          <p>{scoreAlpha}</p>
        </div>
      )}
      <div className={`board center ${activeTileId !== null ? "active" : ""}`}>
        {activeTileId &&
          (selectedQA.dailyDouble ? (
            <DailyDouble
              scoreAlpha={scoreAlpha}
              scoreOmega={scoreOmega}
              question={selectedQA.question}
              answer={selectedQA.answer}
              audio={selectedQA.audio}
              closeModal={closeModal}
            />
          ) : (
            <TileModal
              points={selectedQA.points}
              question={selectedQA.question}
              answer={selectedQA.answer}
              audio={selectedQA.audio}
              closeModal={closeModal}
            />
          ))}
        {!activeTileId && (
          <div className="board-content">
            {categories.map((category) => (
              <div key={category} className="row">
                <div className="tiles-row">
                  <button
                    className={`tileStyle one5th header`}
                    onClick={() => handleCategoryClick()}
                  >
                    {category}
                  </button>
                  {questionsAndAnswers
                    .filter((qa) => qa.category === category)
                    .map((qa) => (
                      <Tile
                        key={qa.id}
                        points={qa.points}
                        used={qa.used}
                        id={qa.id}
                        handleTileClick={() => handleTileClick(qa)}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {!activeTileId && (
        <div className="character">
          <div className="logo">{Teams.Omega}</div>
          <p>{scoreOmega}</p>
        </div>
      )}
    </div>
  );
};

export default Board;
