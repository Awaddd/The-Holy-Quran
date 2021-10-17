import { atomFamily, atom, selector, selectorFamily } from 'recoil';
import reciters from '../Data/reciters.json'

// global state

export const selectedReciterState = atom({
    key: 'selectedReciterState',
    default: reciters.find(reciter => reciter.name == 'Abdurrashid As Sufi')
})
