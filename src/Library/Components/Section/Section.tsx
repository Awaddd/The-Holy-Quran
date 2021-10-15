import React from "react"

export interface HeroProps {
    classes?: string
    children: JSX.Element[] | JSX.Element
}

function Section({ classes = 'bg-base-200 text-center', children }: HeroProps) {

    return (
        <section className={`${classes} py-6 px-4 md:py-10`}>
            {children}
        </section>
    )
}

export default Section