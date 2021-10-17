import React, { useEffect } from "react"
import ButtonIcon from "../../Library/Components/ButtonIcon/ButtonIcon"
import { activeTrackState } from "../../State/state"
import { useRecoilState } from "recoil"

export interface PlayerProps {

}

function Player() {

    const [activeTrack, setActiveTrack] = useRecoilState(activeTrackState)

    const controlActiveTrackPlayingState = () => {
        if (activeTrack.hasOwnProperty('id') == false || activeTrack.id == null) return
        setActiveTrack(activeTrack => { return {...activeTrack, isPlaying: !activeTrack.isPlaying} })
    }

    return (
        <nav className="navbar bg-primary grid">
            <div className="grid grid-flow-col gap-2 justify-center">
                <ButtonIcon icon="stop" action={() => alert('connected')}></ButtonIcon>
                <ButtonIcon icon={activeTrack.isPlaying === true ? 'pause' : 'play'} action={controlActiveTrackPlayingState}></ButtonIcon>
            </div>
        </nav>
    )
}

export default Player