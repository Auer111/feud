import React from "react";

const Tile = ({ points, used, handleTileClick }) => {

  return (
    <>
      {used && <button className={`tileStyle one5th header`}></button>}
      {!used && (
        <button className={`tile one5th tileStyle`} onClick={() => handleTileClick()}>
          <div className="tile-content">{points}</div>
        </button>
      )}
    </>
  );
};

export default Tile;
