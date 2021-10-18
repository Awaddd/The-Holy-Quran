import React, { useRef } from 'react'
import '../Assets/CSS/App.css'
import Chapters from '../Components/Chapters/Chapters'
import Button from '../Library/Components/Button/Button'
import Hero from '../Library/Components/Hero/Hero'
import Reciters from '../Components/Reciters/Reciters'
import Player from '../Components/Player/Player'
import Footer from '../Components/Footer/Footer'
import { scroller } from 'react-scroll'

function Home() {

    const scrollToTarget = () => {
        scroller.scrollTo('chapters', {
            duration: 1000,
            smooth: true,
            offset: -125
        })
    }

    const title = <h1 className="mb-5 text-5xl font-extrabold">The Holy <span className="text-primary underline">Qur'an</span></h1>
    const content = <p className="mb-5">Listen to your favourite Qur'an recitation at your convenience</p>
    const button = <Button classes="btn-primary" label='Get Started' action={scrollToTarget} />

    return (
        <main>
            <Hero title={title} content={content} action={button}></Hero>
            <Reciters></Reciters>
            <Chapters></Chapters>
            <Player></Player>
            <Footer></Footer>
        </main>
    )
}

export default Home