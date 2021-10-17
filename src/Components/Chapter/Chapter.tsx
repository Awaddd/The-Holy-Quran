import React, { useEffect } from "react"
import Panel from "../../Library/Components/Panel/Panel"
import { atomFamily, useRecoilState } from "recoil"
import ReactHowler from 'react-howler'

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
        if (isPlaying === false) setChapter({ ...chapter, isPlaying: true, control: 'pause' })
        else setChapter({ ...chapter, isPlaying: false, control: 'play' })
    }

    return (
        <div>
            <Panel name={name} description={meaning} icon={control} action={controlAudio} />
            <ReactHowler src={source} playing={isPlaying} html5={true} onEnd={() => setChapter({ ...chapter, isPlaying: false, control: 'play' })} />
        </div>
    )
}

export default Chapter