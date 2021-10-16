import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Panel from "../../Library/Components/Panel/Panel"
import { getChapterAudio } from '../../Services/ChaptersService'
import { currentChapterState, currentVerseState } from "../../State/state"
import { useRecoilState } from "recoil"
import { Howl } from 'howler'

export interface ChapterProps {
    chapter: {
        'id': number
        'name_simple': string
        'translated_name': {
            name: string
        }
    }
}

function Chapter ({ chapter }: ChapterProps) {

    //
    const [chapterID, setChapterID] = useState<number|null>(null)

    //
    const { data: chapterAudio } = useQuery(["chapterAudio", { chapterID }], getChapterAudio)

    //
    const [chapterState, setChapterState] = useRecoilState(currentChapterState)

    //
    const [verseState, setVerseState] = useRecoilState(currentVerseState)

    //
    useEffect(() => {
        if (chapterAudio != null) {
            setChapterState({chapterID: chapterID, isPlaying: true})
            playChapter({
                verses: chapterAudio.data.verses, 
                index: 0, 
                cap: chapterAudio.data.numberOfVerses
            }, setVerseState)
        }
    }, [chapterAudio])

    // show the play button by default
    let control = 'play'

    // if this is the current chapter and it's playing, show the pause button instead
    if (chapterID != null) {
        control = chapterState.isPlaying === true ? 'pause' : control
    }

    return (
        <div>
            <Panel name={chapter['name_simple']} description={chapter['translated_name'].name} icon={control} action={() => setChapterID(chapter['id'])} />
            {chapterID != null && chapterState.isPlaying === true && (
                <p>Surah is playing! Verse: {verseState.index + 1}/{verseState.cap} Sound ID: {verseState.soundID}</p>
            )}
        </div>
    )
}

const playVerse = (verses: any, index: number, cap: number, setVerseState: any) => {
    const sound = new Howl({
        src: verses[index].audio.primary,
        html5: true,
    })

    const soundID = sound.play()

    setVerseState({
        verses,
        index,
        cap,
        soundID
    })

    //
    sound.on('end', () => {
        index++
        if (index < cap) playVerse(verses, index, cap, setVerseState)
    })

}

const playChapter = ({verses, index, cap}: any, setVerseState: any) =>  playVerse(verses, index, cap, setVerseState)

export default Chapter