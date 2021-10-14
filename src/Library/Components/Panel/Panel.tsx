import React, { useState } from 'react'
import { BsFillPlayFill, BsBookmark } from 'react-icons/bs';
export interface PanelProps {
    name: string
    description?: string
    icon?: string | "BsFillPlayFill" | "Bookmark"
}

const returnIcon = (iconName: string | undefined, size: string | undefined = "1.6rem") => {
    let item  = null
    switch (iconName) {
        case 'play': item = ( <BsFillPlayFill size={size} /> ); break;
        case 'bookmark': item = ( <BsBookmark size={size} /> ); break;
    }
    return item
}

function Panel ({ name, description, icon } : PanelProps) {
    return (
        <article className="m-2 p-2 bg-white rounded-sm shadow-sm border border-gray-200 cursor-pointer grid grid-cols-3">
            <h3 className="text-lg font-semibold leading-tight text-green-400 col-span-2">{ name }</h3>
            { description !== null && ( <span className="col-span-2 text-sm text-gray-600 row-start-2">{ description }</span> ) }
            { icon !== null && ( <span className="row-span-2 justify-self-end self-center text-green-400"> {returnIcon(icon)} </span> )}
        </article>
    )
}

export default Panel
