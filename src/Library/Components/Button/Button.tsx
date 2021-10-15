import React from "react"

export interface ButtonProps {
    label: string
    action: () => void
    classes?: string
    size?: 'xs' | 'sm' | 'md' | 'lg'
}

function Button({ label, action, size, classes = 'btn btn-primary' } : ButtonProps) {

    let sizeBasedClasses: string = 'px-6 min-h-0 h-10'

    switch (size) {
        case 'xs': sizeBasedClasses = 'btn-xs px-5 min-h-0 h-7'; break;
        case 'sm': sizeBasedClasses = 'btn-sm px-6 min-h-0 h-9 text-sm'; break;
        case 'md': sizeBasedClasses = 'btn-md px-8 min-h-0 h-12'; break;
        case 'lg': sizeBasedClasses = 'btn-lg px-14 min-h-0 h-14'; break;
    }

    return (
        <button className={`btn ${sizeBasedClasses} rounded-md ${classes}`} onClick={action}>{label}</button>
    )
}

export default Button