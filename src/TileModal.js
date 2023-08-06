import React from "react";

const TileModal = ({ point, question, answer, closeModal }) => {
  return (
    <div className="tile-modal">
      <div className="modal-content">
        <div className="modal-body tileStyle header">
          <p>{question}</p>
        </div>
      </div>
    </div>
  );
};

export default TileModal;
