import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Panel from "../../Library/Components/Panel/Panel"
import { getChapterAudio } from '../../Services/ChaptersService'
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

function Chapter ({ chapter }: ChapterProps) {

    //
    const [chapterID, setChapterID] = useState<number|null>(null)

    //
    const { data: chapterAudio } = useQuery(["chapterAudio", { chapterID }], getChapterAudio)

    //
    useEffect(() => {
        if (chapterAudio != null) playChapter(chapterAudio.data)
    }, [chapterAudio])

    const control = 'play'

    return (
        <Panel name={chapter['name_simple']} description={chapter['translated_name'].name} icon={control} action={() => setChapterID(chapter['id'])} />
    )
}

export default Chapter