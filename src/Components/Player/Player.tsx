import React from "react"
import ButtonIcon from "../../Library/Components/ButtonIcon/ButtonIcon"

export interface PlayerProps {

}

function Player() {

    let dynamic = 'play'

    return (
        <nav className="navbar bg-primary grid">
            <div className="grid grid-flow-col gap-2 justify-center">
                <ButtonIcon icon="stop" action={() => alert('connected')}></ButtonIcon>
                <ButtonIcon icon={dynamic} action={() => alert('connected')}></ButtonIcon>
            </div>
        </nav>
    )
}

export default Player