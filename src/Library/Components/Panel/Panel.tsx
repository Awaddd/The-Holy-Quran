import React from 'react'

export interface PanelProps {
    name: string
    description?: string
}

function Panel ({ name, description } : PanelProps) {
    return (
        <article>
            <h3>{ name } { description !== null && ( <span>({description})</span> ) } </h3>
        </article>
    )
}

export default Panel
