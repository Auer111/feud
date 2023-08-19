// Import your audio clips
import clip1 from "./correct.mp3";
import clip2 from "./fill.mp3";
import clip3 from "./intro.mp3";
import clip4 from "./wrong.mp3";
import aWin from "./alphaWin.mp3";
import oWin from "./omegaWin.mp3"
import c1p1 from "./qa13/c1/p1.mp3";
import c1p2 from "./qa13/c1/p2.mp3";
import c1p3 from "./qa13/c1/p3.mp3";
import c1p4 from "./qa13/c1/p4.mp3";
import c1p5 from "./qa13/c1/p5.mp3";
import c2p1 from "./qa13/c2/p1.mp3";
import c2p2 from "./qa13/c2/p2.mp3";
import c2p3 from "./qa13/c2/p3.mp3";
import c2p4 from "./qa13/c2/p4.mp3";
import c2p5 from "./qa13/c2/p5.mp3";
import c3p1 from "./qa13/c3/p1.mp3";
import c3p2 from "./qa13/c3/p2.mp3";
import c3p3 from "./qa13/c3/p3.mp3";
import c3p4 from "./qa13/c3/p4.mp3";
import c3p5 from "./qa13/c3/p5.mp3";
import c4p1 from "./qa13/c4/p1.mp3";
import c4p2 from "./qa13/c4/p2.mp3";
import c4p3 from "./qa13/c4/p3.mp3";
import c4p4 from "./qa13/c4/p4.mp3";
import c4p5 from "./qa13/c4/p5.mp3";
import c5p1 from "./qa13/c5/p1.mp3";
import c5p2 from "./qa13/c5/p2.mp3";
import c5p3 from "./qa13/c5/p3.mp3";
import c5p4 from "./qa13/c5/p4.mp3";
import c5p5 from "./qa13/c5/p5.mp3";

// Define the audio clips and their corresponding enum values in an object
export const AudioClips = {
  Correct: new Audio(clip1),
  Fill: new Audio(clip2),
  Intro: new Audio(clip3),
  Wrong: new Audio(clip4),
  aWin: new Audio(aWin),
  oWin: new Audio(oWin),
  c1p1: new Audio(c1p1),
  c1p2: new Audio(c1p2),
  c1p3: new Audio(c1p3),
  c1p4: new Audio(c1p4),
  c1p5: new Audio(c1p5),
  c2p1: new Audio(c2p1),
  c2p2: new Audio(c2p2),
  c2p3: new Audio(c2p3),
  c2p4: new Audio(c2p4),
  c2p5: new Audio(c2p5),
  c3p1: new Audio(c3p1),
  c3p2: new Audio(c3p2),
  c3p3: new Audio(c3p3),
  c3p4: new Audio(c3p4),
  c3p5: new Audio(c3p5),
  c4p1: new Audio(c4p1),
  c4p2: new Audio(c4p2),
  c4p3: new Audio(c4p3),
  c4p4: new Audio(c4p4),
  c4p5: new Audio(c4p5),
  c5p1: new Audio(c5p1),
  c5p2: new Audio(c5p2),
  c5p3: new Audio(c5p3),
  c5p4: new Audio(c5p4),
  c5p5: new Audio(c5p5),
};

export const getAudioClip = (clipName) => {
  if (AudioClips.hasOwnProperty(clipName)) {
    return AudioClips[clipName];
  } else {
    console.error(`Audio clip "${clipName}" not found.`);
    return null;
  }
};