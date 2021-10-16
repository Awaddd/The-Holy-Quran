import React, { useEffect } from "react"
import Panel from "../../Library/Components/Panel/Panel"
import { atomFamily, useRecoilState } from "recoil"
import { Howl } from "howler"

export interface ChapterProps {
    chapterProperty: {
        id: number
        name: string
        meaning: string
        verseCount: number
        source: string
        isPlaying: boolean
        control: string
    }
}

export const chapterState = atomFamily({
    key: 'chapter', 
    default: param => param
})

function Chapter ({ chapterProperty }: ChapterProps) {

    const [chapter, setChapter] = useRecoilState(chapterState(chapterProperty))
    const { id, name, meaning, verseCount, source, isPlaying, control } = chapter

    const controlAudio = () => {

        const sound = new Howl({
            src: source,
            html5: true
        })

        sound.play()

        setChapter({...chapter, isPlaying: true, control: 'pause'})

    }

    return (
        <div>
            <Panel name={name} description={meaning} icon={control} action={controlAudio} />
        </div>
    )
}

export default Chapter