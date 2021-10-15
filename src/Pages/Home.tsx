import React, { useRef } from 'react'
import '../Assets/CSS/App.css'
import Chapters from '../Components/Chapters/Chapters'
import Button from '../Library/Components/Button/Button'
import Hero from '../Library/Components/Hero/Hero'
import Reciters from '../Components/Reciters/Reciters'
import Link from '../Library/Components/Link/Link'

function Home() {

    const qariRef = useRef()

    const scrollToTarget = () => {
        return alert('Not yet implemented')
        // qariRef.current.scrollIntoView({ behaviour: 'smooth' })
    }

    const title = <h1 className="mb-5 text-5xl font-extrabold">The Holy <span className="text-primary underline">Qur'an</span></h1>
    const content = <p className="mb-5">Listen to your favourite Qur'an recitation at your convenience</p>
    const button = <Button classes="btn-primary" label='Get Started' action={scrollToTarget} />
    const link = <Link label="Start Now" url="" />

    return (
        <main>
            <Hero title={title} content={content} action={link}></Hero>
            <Reciters></Reciters>
            <Chapters></Chapters>
        </main>
    )
}

export default Home