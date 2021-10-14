import React from "react"

export interface LinkProps {
    'label': string
    'url': string
}

function Link({ label, url } : LinkProps) {
    return (
        <a href={url}>{label}</a>
    )
}

export default Link