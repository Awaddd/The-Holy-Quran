import { mainAPI, audioSource } from './Api'

export const getAllChapters = async () => {
    return (await fetch(`${mainAPI}/chapters?language=en`)).json() 
}

export const getChapterAudio = (id: string = '001') => {
    const reciter: string = 'mishaari_raashid_al_3afaasee'
    return (`${audioSource}/${reciter}/${id}.mp3`)
}
