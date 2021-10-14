import React, { useState } from 'react'
import { BsFillPlayFill, BsBookmark } from 'react-icons/bs';
export interface PanelProps {
    name: string
    description?: string
    icon?: string | "BsFillPlayFill" | "Bookmark"
}

const returnIcon = (iconName: string | undefined) => {
    let item  = null

    switch (iconName) {
        case 'play': item = ( <BsFillPlayFill/> ); break;
        case 'bookmark': item = ( <BsBookmark/> ); break;
    }

    return item
}

function Panel ({ name, description, icon } : PanelProps) {
    return (
        <article className="m-2 p-2 bg-white rounded-sm shadow-sm border border-gray-200 cursor-pointer">
            <h3 className="text-lg font-semibold leading-tight text-green-400">{ name }</h3>
            { description !== null && ( <span className="text-sm text-gray-600">{ description }</span> ) }
            { icon !== null && ( <span className=""> {returnIcon(icon)} </span> )}
        </article>
    )
}

export default Panel
