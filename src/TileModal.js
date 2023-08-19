import React, { useState, useEffect, useRef } from "react";
import { AudioClips, getAudioClip } from "./audio/audio.js";
import { Teams } from "./data";

const randomIndex = function (str) {
  const underscoreIndices = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      underscoreIndices.push(i);
    }
  }
  return underscoreIndices[
    Math.floor(Math.random() * underscoreIndices.length)
  ];
};

const createRevealedCharacters = (str) => {
  let revealed = "";
  for (let i = 0; i < str.length; i++) {
    revealed += str[i] === " " ? " " : "_";
  }
  return revealed;
};

const TileModal = ({ id, points, question, answer, audio, closeModal }) => {
  const [revealedCharacters, setRevealedCharacters] = useState(
    createRevealedCharacters(answer)
  );
  const revealedCharactersRef = useRef(revealedCharacters);

  useEffect(() => {
    revealedCharactersRef.current = revealedCharacters;
    console.log(answer);
  }, [revealedCharacters]);

  useEffect(() => {
    AudioClips[audio]?.play();
  }, [audio]);

  // Function to reveal characters of the answer
  const revealCharacters = () => {
    if (revealedCharactersRef.current.includes("_")) {
      const randomIdx = randomIndex(revealedCharactersRef.current);
      const newRevealedCharacters = revealedCharactersRef.current.split("");
      if (answer[randomIdx] !== " ") {
        newRevealedCharacters[randomIdx] = answer[randomIdx];
      }
      setRevealedCharacters(newRevealedCharacters.join(""));
    }
  };

  const revealAllCharacters = () => {
    setRevealedCharacters(answer);
  };

  const handleModalClick = () => {
    if (revealedCharacters.includes("_")) {
      revealCharacters();
    } else {
      AudioClips.Wrong.play();
      closeModal();
    }
  };

  return (
    <>
      <div className="tile-modal screen">
        <button
          className="character"
          onClick={() => {
            if (revealedCharacters.includes("_")) {
              AudioClips.Correct.play();
              revealAllCharacters();
            } else {
              closeModal(Teams.Alpha, points);
            }
          }}
        >
          <div className="logo">{Teams.Alpha}</div>
        </button>

        <div className="modal-content" onClick={handleModalClick}>
          <div className="modal-body tileStyle header">
            <p className="question">{question}</p>
            <p className="answer">{revealedCharacters}</p>
          </div>
        </div>
        <button
          className="character"
          onClick={() => {
            if (revealedCharacters.includes("_")) {
              AudioClips.Correct.play();
              revealAllCharacters();
            } else {
              closeModal(Teams.Omega, points);
            }
          }}
        >
          <div className="logo">{Teams.Omega}</div>
        </button>
      </div>
    </>
  );
};

export default TileModal;
