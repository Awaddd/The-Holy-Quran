import React from "react"

export interface HeroProps {
    classes?: string
    children: JSX.Element
}

function Section({ classes = 'bg-base-200 text-center', children }: HeroProps) {

    return (
        <section className={`${classes} py-6 px-4`}>
            {children}
        </section>
    )
}

export default Section