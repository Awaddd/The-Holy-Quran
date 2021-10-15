import React from "react"
import Section from "../../Library/Components/Section/Section"
import reciterImage from "../../Assets/Images/mishary-al-afasy.jpg"

export interface RecitersProps {

}

function Reciters ({}: RecitersProps) {
    return (
        <Section classes="bg-primary text-center text-white px-4">
            <h2 className="mb-8 sm:mb-12 text-4xl font-extrabold">Qari's</h2>
            
            <article className="mb-8 flex gap-3 sm:w-96 mx-auto">
                <img className="rounded-btn w-24 h-24 cursor-pointer" src={reciterImage} alt="" />
                <main className="text-left align-center">
                    <h6 className="font-bold">Mishary Al Afasy</h6>
                    <p className="text-sm">Mishary is an excellent and established Qari with a beautiful recitation style</p>
                </main>
            </article>
        </Section>
    )
}

export default Reciters
