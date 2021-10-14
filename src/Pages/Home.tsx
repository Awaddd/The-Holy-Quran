import React from 'react'
import '../Assets/CSS/App.css'
import Chapters from '../Components/Chapters/Chapters'
import Button from '../Library/Components/Button/Button'
import Hero from '../Library/Components/Hero/Hero'

const content = "Listen to your favourite Qur'an recitation at your convenience"
const button = (<Button label='Start' action={() => alert ('started!')} />)

function Home() {
    return (
        <div className="my-2">
            {/* <header className="my-4">
                <h1 className="text-4xl sm:text-5xl sm:leading-none md:text-6xl text-center tracking-tight leading-10 font-extrabold text-gray-900">The Holy <span className="text-indigo-600 underline hover:text-indigo-500">Qur'an</span></h1>
            </header> */}
            <Hero title="The Holy Qur'an" content={content} component={button}></Hero>
            <Chapters></Chapters>
        </div>
    )
}

export default Home