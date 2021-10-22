import { atomFamily, atom } from "recoil";
import reciters from "../Data/reciters";

// global state

export const selectedReciterState = atom({
  key: "selectedReciterState",
  default: reciters.find((reciter) => reciter.name == "Abdurrashid As Sufi"),
});

export const chapterState = atomFamily({
  key: "chapter",
  default: (param) => param,
});

export const activeTrackState = atom({
  key: "activeTrackState",
  default: {
    isPlaying: false,
    enabled: false,
  },
});
