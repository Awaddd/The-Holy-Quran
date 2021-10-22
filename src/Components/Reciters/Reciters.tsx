import React from "react"
import Section from "../../Library/Components/Section/Section"
import Reciter from "../Reciter/Reciter"
import reciters from '../../Data/reciters'

export interface RecitersProps {

}

function Reciters({ }: RecitersProps) {

  return (
    <Section classes="px-4 pb-12 bg-primary text-center text-white">
      <h2 className="mb-10 sm:mb-12 text-4xl font-extrabold">Qari's</h2>
      {reciters.map((reciter, key) => <Reciter key={key} reciter={reciter} />)}
    </Section>
  )
}

export default Reciters
