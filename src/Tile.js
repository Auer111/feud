import React from "react";

const Tile = ({ point, question, handleTileClick }) => {
  const handleClick = () => {
    handleTileClick();
  };

  return (
    <button className={`tile one5th tileStyle`} onClick={handleClick}>
      <div className="tile-content">{point}</div>
    </button>
  );
};

export default Tile;
