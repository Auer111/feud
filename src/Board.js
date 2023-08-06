import React, { useState } from "react";
import Tile from "./Tile";
import TileModal from "./TileModal";
import { questionsAndAnswersWithIds, CategoryEnum } from "./data"; // Import the questionsAndAnswersWithIds and CategoryEnum

const Board = () => {
  // For demonstration purposes, let's define some sample categories and points.
  const categories = Object.values(CategoryEnum); // Get an array of all categories from the CategoryEnum object

  const [activeTile, setActiveTile] = useState(null);
  const [selectedQA, setSelectedQA] = useState(null);

  const handleTileClick = (qa) => {
    if (activeTile === qa.id) {
      setActiveTile(null);
      setSelectedQA(null);
    } else {
      setActiveTile(qa.id);
      setSelectedQA(qa);
    }
  };

  const closeModal = () => {
    setActiveTile(null);
    setSelectedQA(null);
  };

  return (
    <div className={`board center ${activeTile !== null ? "active" : ""}`}>
      {activeTile && (
        <TileModal
          point={selectedQA.points}
          question={selectedQA.question}
          answer={selectedQA.answer}
          closeModal={closeModal}
        />
      )}
      {!activeTile && (
        <div className="board-content">
          {categories.map((category) => (
            <div key={category} className="row">
              <div className="tiles-row">
                <button
                  className={`tileStyle one5th header`}
                  onClick={() => handleTileClick(null)}
                >
                  {category}
                </button>
                {questionsAndAnswersWithIds
                  .filter((qa) => qa.category === category)
                  .map((qa) => (
                    <Tile
                      key={qa.id}
                      point={qa.points}
                      handleTileClick={() => handleTileClick(qa)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;
