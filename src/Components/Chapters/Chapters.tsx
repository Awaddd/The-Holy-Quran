import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getAllChapters } from '../../Services/ChaptersService'
import Section from '../../Library/Components/Section/Section'
import Chapter from '../Chapter/Chapter'
import { getChapterAudio } from '../../Services/ChaptersService'
import { selectedReciterState } from '../../State/state'
import { useRecoilState } from 'recoil'
import reciters from '../../Data/reciters.json'
import Select from '../../Library/Components/Select/Select'
import { Element } from 'react-scroll'

export interface ChaptersProps {

}

function Chapters({ }: ChaptersProps) {

    const { data, status } = useQuery('chapters', async () => getAllChapters())
    const [selectedReciter, setSelectedReciter] = useState(null)
    const [reciter, setReciter] = useRecoilState(selectedReciterState)

    useEffect(() => {
        if (selectedReciter == null) return
        setReciter(reciters.find(reciter => reciter.id == selectedReciter))
    }, [selectedReciter])

    if (status == 'loading') {
        return (
            <Section>
                <p className="text-center">Loading...</p>
            </Section>
        )
    }

    if (typeof data == 'undefined' || data == null || data == {}) {
        return (
            <Section classes="text-center bg-accent text-white">
                <h2 className="font-extrabold text-4xl">Sorry!</h2>
                <p className="mt-4 text-1xl font-semibold">Nothing to see here :( </p>
            </Section>
        )
    }

    const chapters = data.chapters.map(chapter => {
        return {
            id: chapter.id,
            name: chapter['name_simple'],
            meaning: chapter['translated_name'].name,
            source: getChapterAudio(String(chapter.id).padStart(3, '0'), reciter.id),
            control: 'play'
        }
    })
    
    return (
        <Section classes="text-center">
            <h2 className="mb-8 sm:mb-8 text-4xl font-extrabold">Surah<span className="text-accent">'s</span></h2>
            <TargetElement name="chapters" />

            <form className="grid justify-items-center mb-4 sm:mb-10">
                <Select label="Reciter" selected={reciter.id} options={reciterOptions()} 
                action={(event) => setSelectedReciter(event.target.value)}
                classes="w-full sm:w-4/5 md:w-3/5 lg:w-2/5"></Select>
            </form>

            <main className="sm:mt-3 sm:mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5">
                {chapters.map((chapter: any) => {
                    return (
                        <Chapter key={chapter.id} chapterProperty={chapter} />
                    )
                })}
            </main>
        </Section>
    )

}

const TargetElement = Element;
const reciterOptions = () => reciters.map(reciter => {return { label: reciter.name, value: reciter.id }})

export default Chapters
