import React from "react"

export interface HeroProps {
  title: any
  content?: any
  action?: any
  backgroundColour?: string
}

function Hero({ title, content, action, backgroundColour = 'bg-base-200' }: HeroProps) {

  return (
    <section className={`hero min-h-screen ${backgroundColour}`}>
      <div className="text-center hero-content">
        <div className="max-w-md">
          {title}
          {content}
          {action}
        </div>
      </div>
    </section>
  )
}

export default Hero