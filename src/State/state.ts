import { atom, selector } from 'recoil';

// global state

// chapters
export const chaptersState = atom({key: 'chapters', default: []})

// current chapter 
export const currentChapterState = atom({key: 'currentChapter', default: {}})
