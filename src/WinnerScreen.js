import React from "react";
import { Teams } from "./data";
import { AudioClips } from "./audio/audio";

const WinnerScreen = ({ winner }) => {
  const [showWinner, setShowWinner] = React.useState(false);
  React.useEffect(() => {
    (winner === Teams.Alpha ? AudioClips.aWin : AudioClips.oWin).play();
    setTimeout(() => setShowWinner(true), 18000);
  }, [showWinner]);

  return (
    <div className="winner-screen center">
      {!showWinner && (
        <iframe src="https://media.tenor.com/gvx0Ukr-9zkAAAAi/dm4uz3-foekoe.gif"></iframe>
      )}
      {showWinner && winner === Teams.Alpha && (
        <div className="character">
          <div className="logo">{Teams.Alpha}</div>
        </div>
      )}
      {showWinner && winner === Teams.Omega && (
        <>
          <div></div>
          <div className="character">
            <div className="logo">{Teams.Omega}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default WinnerScreen;
