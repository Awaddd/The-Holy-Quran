import React, { useRef } from 'react'
import '../Assets/CSS/App.css'
import Chapters from '../Components/Chapters/Chapters'
import Button from '../Library/Components/Button/Button'
import Hero from '../Library/Components/Hero/Hero'
import Section from '../Library/Components/Section/Section'

function Home() {

    const qariRef = useRef()

    const scrollToTarget = () => {
        console.log('here')
        console.log(qariRef)
        qariRef.current.scrollIntoView({ behaviour: 'smooth' })
    }

    const title = <h1 className="mb-5 text-5xl font-extrabold">The Holy <span className="text-primary underline">Qur'an</span></h1>
    const content = <p className="mb-5">Listen to your favourite Qur'an recitation at your convenience</p>
    const button = <Button classes="btn-primary" label='Get Started' action={scrollToTarget} />

    return (
        <main>
            <Hero title={title} content={content} action={button}></Hero>
            <Section classes="h-25 bg-neutral text-white text-center">
                <h2 ref={qariRef} className="text-4xl font-extrabold text-accent">Qari's</h2>
            </Section>

            {/* <Chapters></Chapters> */}
        </main>
    )
}

export default Home