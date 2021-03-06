import React, { useEffect } from "react"
import ButtonIcon from "../../Library/Components/ButtonIcon/ButtonIcon"
import { activeTrackState, chapterState } from "../../State/state"
import { useRecoilState } from "recoil"

export interface PlayerProps {

}

function Player() {

  const [activeTrack, setActiveTrack] = useRecoilState(activeTrackState)
  const { isPlaying } = activeTrack
  const [chapter, setChapter] = useRecoilState(chapterState(activeTrack.chapter))

  const controlActiveTrackPlayingState = () => {
    if (activeTrack.hasOwnProperty('chapter') == false || activeTrack.chapter.hasOwnProperty('id') == false || activeTrack.chapter.id == null) return
    if (isPlaying === false) {
      setActiveTrack({ ...activeTrack, isPlaying: true })
      setChapter({ ...chapter, control: 'pause' })
    } else {
      setActiveTrack({ ...activeTrack, isPlaying: false })
      setChapter({ ...chapter, control: 'play' })
    }
  }

  return (
    <nav className={`${activeTrack.enabled === false ? 'hidden' : ''} navbar bg-primary grid fixed bottom-0 w-full border-t-2 border-white`}>
      <div className="grid grid-flow-col gap-2 justify-center">
        <ButtonIcon icon="stop" action={() => alert('Not yet implemented')}></ButtonIcon>
        <ButtonIcon icon={isPlaying === true ? 'pause' : 'play'} action={controlActiveTrackPlayingState}></ButtonIcon>
      </div>
    </nav>
  )
}

export default Player