import React from "react"
import Panel from "../../Library/Components/Panel/Panel"
import { chapterState, activeTrackState } from "../../State/state"
import { useRecoilState } from "recoil"
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

function Chapter ({ chapterProperty }: ChapterProps) {

    const [activeTrack, setActiveTrack] = useRecoilState(activeTrackState)

    const [chapter, setChapter] = useRecoilState(chapterState(chapterProperty))
    const { id, name, meaning, verseCount, source, isPlaying, control } = chapter

    const controlAudio = () => {
        if (isPlaying === false) {
            setActiveTrack({ ...activeTrack, id, isPlaying: true })
            setChapter({ ...chapter, isPlaying: true, control: 'pause' })
        }
        else pauseTrack()
    }

    const pauseTrack = () => {
        setActiveTrack({ ...activeTrack, id, isPlaying: false })
        setChapter({ ...chapter, isPlaying: false, control: 'play' })
    }

    return (
        <div>
            <Panel name={name} description={meaning} icon={control} action={controlAudio} />
            <ReactHowler src={source} playing={activeTrack.isPlaying === true && activeTrack.id == id} html5={true} onEnd={pauseTrack} />
        </div>
    )
}

export default Chapter