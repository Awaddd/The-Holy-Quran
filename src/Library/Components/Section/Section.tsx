import React from "react"

export interface HeroProps {
    classes?: string
    children: JSX.Element[] | JSX.Element
}

function Section({ classes = 'bg-base-200 text-center', children }: HeroProps) {

    return (
        <section className={`${classes} py-6 px-4 sm:py-12 sm:pb-14`}>
            {children}
        </section>
    )
}

export default Section