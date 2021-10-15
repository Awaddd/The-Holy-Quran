import React, { useState } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
export interface PanelProps {
    name: string
    description?: string
    icon?: "play" | "pause"
    action?: (...args: any[]) => void
}

const returnIcon = (iconName: string | undefined, size: string | undefined = "1.5rem") => {
    let item  = null
    switch (iconName) {
        case 'play': item = ( <BsFillPlayFill size={size} /> ); break;
        case 'pause': item = ( <BsPauseFill size={size} /> ); break;
    }
    return item
}

function Panel ({ name, description, icon, action } : PanelProps) {
    return (
        <article className="m-2 p-2 bg-white cursor-pointer grid grid-cols-3 text-left">
            <h3 className="text-lg font-semibold leading-tight text-accent col-span-2">{ name }</h3>
            { description !== null && ( <span className="col-span-2 text-sm text-gray-600 row-start-2">{ description }</span> ) }
            { icon !== null && ( <span onClick={action} className="row-span-2 justify-self-end self-center text-accent"> {returnIcon(icon)} </span> )}
        </article>
    )
}

export default Panel
