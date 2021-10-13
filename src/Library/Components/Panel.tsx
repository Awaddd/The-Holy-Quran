import React from 'react'

export interface PanelProps {
    name: string
    description?: string
}

function Panel ({ name, description } : PanelProps) {
    return (
        <article>
            <h3>{ name } ({ description })</h3>
        </article>
    )
}

export default Panel