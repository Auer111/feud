// Import your audio clips
import clip1 from "./correct.mp3";
import clip2 from "./fill.mp3";
import clip3 from "./intro.mp3";
import clip4 from "./wrong.mp3";
import aWin from "./alphaWin.mp3";
import oWin from "./omegaWin.mp3"

// Define the audio clips and their corresponding enum values in an object
export const AudioClips = {
  Correct: new Audio(clip1),
  Fill: new Audio(clip2),
  Intro: new Audio(clip3),
  Wrong: new Audio(clip4),
  aWin: new Audio(aWin),
  oWin: new Audio(oWin),
};

export const getAudioClip = (clipName) => {
  if (AudioClips.hasOwnProperty(clipName)) {
    return AudioClips[clipName];
  } else {
    console.error(`Audio clip "${clipName}" not found.`);
    return null;
  }
};