import React from 'react'
import '../Assets/CSS/App.css'
import Chapters from '../Components/Chapters/Chapters'

function Home() {
    return (
        <div className="my-2">
            <header className="my-4">
                <h1 className="text-4xl sm:text-5xl sm:leading-none md:text-6xl text-center tracking-tight leading-10 font-extrabold text-gray-900">The Holy <span className="text-indigo-600 underline hover:text-indigo-500">Qur'an</span></h1>
            </header>
            <Chapters></Chapters>
        </div>
    )
}

export default Home