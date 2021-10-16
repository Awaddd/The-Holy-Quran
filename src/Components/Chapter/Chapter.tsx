import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Panel from "../../Library/Components/Panel/Panel"
import { getChapterAudio } from '../../Services/ChaptersService'
import { currentChapterState } from "../../State/state"
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
    useEffect(() => {
        if (chapterAudio != null) {
            setChapterState({chapterID: chapterID, isPlaying: true})
            playChapter(chapterAudio.data)
        }
    }, [chapterAudio])

    // show the play button by default
    let control = 'play'

    // if this is the current chapter and it's playing, show the pause button instead
    if (chapterID != null) {
        control = chapterState.isPlaying === true ? 'pause' : control
    }

    return (
        <Panel name={chapter['name_simple']} description={chapter['translated_name'].name} icon={control} action={() => setChapterID(chapter['id'])} />
    )
}

const playVerse = (verses: any, index: number, cap: number) => {
    const sound = new Howl({
        src: verses[index].audio.primary,
        html5: true,
    })

    sound.play()

    sound.on('end', () => {
        index++
        if (index < cap) playVerse(verses, index, cap)
    })
}

const playChapter = (chapterAudio: any) => playVerse(chapterAudio.verses, 0, chapterAudio.numberOfVerses)

export default Chapter