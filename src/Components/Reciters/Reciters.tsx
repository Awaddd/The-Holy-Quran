import React from "react"
import Section from "../../Library/Components/Section/Section"
import Reciter from "../Reciter/Reciter"
import reciters from '../../Data/reciters.json'

export interface RecitersProps {

}

function Reciters ({}: RecitersProps) {

    return (
        <Section classes="bg-primary text-center text-white px-4">
            <h2 className="mb-8 sm:mb-12 text-4xl font-extrabold">Qari's</h2>
            {reciters.map((reciter, key) => <Reciter key={key} reciter={reciter} />)}
        </Section>
    )
}

export default Reciters
