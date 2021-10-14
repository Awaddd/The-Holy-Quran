import React from "react"

export interface ButtonProps {
    'label': string
    'action': () => void
}

function Button({ label, action } : ButtonProps) {
    return (
        <button className='btn btn-primary' onClick={action}>{label}</button>
    )
}

export default Button