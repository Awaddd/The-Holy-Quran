import React from 'react'
import '../Assets/CSS/App.css'
import Chapters from '../Components/Chapters'

function Home() {
    return (
        <div>
            <header>
                <h1>The Holy Qur'an</h1>
            </header>
            <Chapters></Chapters>
        </div>
    )
}

export default Home