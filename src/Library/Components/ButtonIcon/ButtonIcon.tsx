import React from "react"
import { BsFillPlayFill, BsPauseFill, BsStopFill } from 'react-icons/bs';

export interface ButtonIconProps {
    icon?: string
    action: () => void
    classes?: string
    iconClasses?: string
    size?: string
}

function ButtonIcon({  icon, action, size, classes = 'btn btn-primary', iconClasses = 'text-accent' } : ButtonIconProps) {

    let sizeBasedClasses: string = 'px-6 min-h-0 h-10'

    switch (size) {
        case 'xs': sizeBasedClasses = 'btn-xs px-5 min-h-0 h-7'; break;
        case 'sm': sizeBasedClasses = 'btn-sm px-6 min-h-0 h-9 text-sm'; break;
        case 'md': sizeBasedClasses = 'btn-md px-8 min-h-0 h-12'; break;
        case 'lg': sizeBasedClasses = 'btn-lg px-14 min-h-0 h-14'; break;
    }

    const returnIcon = (iconName: string | undefined, size: string | undefined = "1.5rem") => {
        let item  = null
        switch (iconName) {
            case 'play': item = ( <BsFillPlayFill size={size} /> ); break;
            case 'pause': item = ( <BsPauseFill size={size} /> ); break;
            case 'stop': item = ( <BsStopFill size={size} /> ); break;
        }
        return item
    }
    

    return (
        <button className={`btn ${sizeBasedClasses} rounded-md ${classes}`} onClick={action}>
            <span className={iconClasses}>{returnIcon(icon)}</span>
        </button>
    )
}

export default ButtonIcon