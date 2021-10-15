import { mainAPI, audioAPI } from './Api'

export const getAllChapters = async () => {
    return (await fetch(`${mainAPI}/chapters?language=en`)).json() 
}

export const getChapterAudio = async ({ queryKey }: any) => {
    const [_key, { chapterID }] = queryKey

    if (chapterID == null) return;
    return (await fetch(`${audioAPI}/surah/${chapterID}`)).json()
}
