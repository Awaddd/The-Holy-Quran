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
        source: string
        control: string
    }
}

function Chapter ({ chapterProperty }: ChapterProps) {

    const [activeTrack, setActiveTrack] = useRecoilState(activeTrackState)
    const { isPlaying } = activeTrack

    const [chapter, setChapter] = useRecoilState(chapterState(chapterProperty))
    const { id, name, meaning, source, control } = chapter

    const controlAudio = () => {

        if (activeTrack.hasOwnProperty('chapter') && activeTrack.chapter.hasOwnProperty('id') && activeTrack.chapter.id !== id) {
            return playTrack()
        }

        isPlaying === false ? playTrack() : pauseTrack()

    }

    const playTrack = () => {
        setActiveTrack({ ...activeTrack, enabled: true, isPlaying: true, chapter })
        setChapter({ ...chapter, control: 'pause' })
    }

    const pauseTrack = () => {
        setActiveTrack({ ...activeTrack, enabled: true, isPlaying: false, chapter })
        setChapter({ ...chapter, control: 'play' })
    }

    return (
        <>
            <Panel name={name} description={meaning} icon={control} action={controlAudio} />
            <ReactHowler src={source} playing={isPlaying === true && activeTrack.chapter.id == id} html5={true} onEnd={pauseTrack} />
        </>
    )
}

export default Chapter