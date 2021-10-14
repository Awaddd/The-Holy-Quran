import React from "react"

export interface HeroProps {
    title: string
    content: string
    component: any
}

function Hero({ title, content, component}: HeroProps) {

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{ title }</h1>
                    <p className="mb-5">{ content }</p>
                    {component}
                </div>
            </div>
        </div>
    )
}

export default Hero