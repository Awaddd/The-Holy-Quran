import { atomFamily, atom, selector, selectorFamily } from 'recoil';
import reciters from '../Data/reciters.json'

// global state

export const selectedReciterState = atom({
    key: 'selectedReciterState',
    default: reciters.find(reciter => reciter.name == 'Mishary Al Afasy')
})

export const chapterState = atomFamily({
    key: 'chapter', 
    default: param => param
})

export const activeTrackState = atom({
    key: 'activeTrackState',
    default: {
        isPlaying: false,
        enabled: false
    }
})

export const previousChapterSelector = selector({
    key: 'previousChapterSelector',
    get: ({get}) => {
        const activeTrack = get(activeTrackState)
        if (activeTrack.hasOwnProperty('chapter') === false) return
        return get(chapterState(activeTrack.chapter))
    }
})
