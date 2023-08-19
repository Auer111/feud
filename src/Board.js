import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import TileModal from "./TileModal";
import { Teams } from "./data"; // Import the questionsAndAnswersWithIds and CategoryEnum
import { AudioClips } from "./audio/audio";
import DailyDouble from "./DailyDouble";

const Board = ({ categories, onGameEnd }) => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState(categories);
  const [activeTileId, setActiveTileId] = useState(null);
  const [selectedQA, setSelectedQA] = useState(null);
  const [scoreAlpha, setScoreAlpha] = useState(0);
  const [scoreOmega, setScoreOmega] = useState(0);
  const [fillId, setFillId] = useState(0);

  const handleCategoryClick = () => {};

  useEffect(() => {
    AudioClips.Fill.play();

    setTimeout(() => setFillId(fillId + 1), 1000);
  }, []);

  useEffect(() => {
    //initilize board
    if (fillId > 0) {
      setTimeout(() => setFillId(fillId + 1), 90);
    }
  }, [fillId]);

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
      const updatedCategories = questionsAndAnswers.map((category) => ({
        ...category,
        questions: category.questions.map((qa) =>
          qa.id === selectedQA.id ? { ...qa, used: true } : qa
        ),
      }));

      if (team === Teams.Alpha) {
        setScoreAlpha((prevScore) => prevScore + points);
      } else if (team === Teams.Omega) {
        setScoreOmega((prevScore) => prevScore + points);
      }

      setQuestionsAndAnswers(updatedCategories);
      setActiveTileId(null);
      setSelectedQA(null);
    }
  };

  useEffect(() => {
    if (
      questionsAndAnswers.every((category) =>
        category.questions.every((qa) => qa.used)
      )
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
              closeModal={closeModal}
            />
          ) : (
            <TileModal
              points={selectedQA.points}
              question={selectedQA.question}
              answer={selectedQA.answer}
              closeModal={closeModal}
            />
          ))}
        {!activeTileId && (
          <div className="board-content">
            {questionsAndAnswers.map((c, i) => (
              <div key={i} className="row">
                <div className="tiles-row">
                  <button
                    className={`tileStyle one5th header`}
                    onClick={() => handleCategoryClick()}
                  >
                    {c.name}
                  </button>
                  {c.questions.map((qa, qai) => (
                    <Tile
                      key={qai}
                      points={qa.points}
                      used={qa.used || i * 5 + qai > fillId}
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
