import { mainAPI, audioSource } from "./Api";

export const getAllChapters = async () => {
  return (await fetch(`${mainAPI}/chapters?language=en`)).json();
};

export const getChapterAudio = (
  chapter: string = "001",
  reciterID: string = "mishaari_raashid_al_3afaasee"
) => {
  return `${audioSource}/${reciterID}/${chapter}.mp3`;
};
