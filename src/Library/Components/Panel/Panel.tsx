import React from 'react'

export interface PanelProps {
    name: string
    description?: string
}

function Panel ({ name, description } : PanelProps) {
    return (
        <article style={{background: "#e9ecef", border: "1px solid #434c5e", padding: "0.5rem 1.5rem", borderRadius: "3px"}}>
            <h3>{ name } { description !== null && ( <span>({description})</span> ) } </h3>
        </article>
    )
}

export default Panel
