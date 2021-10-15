import React from 'react'
import { useQuery } from 'react-query'
import { getAllChapters } from '../../Services/ChaptersService'
import Panel from '../../Library/Components/Panel/Panel'
import Section from '../../Library/Components/Section/Section'

export interface ChaptersProps {

}

const playAudio = (chapterID: number) => {
}

function Chapters({ }: ChaptersProps) {

    const { data, error, status } = useQuery('chapters', async () => getAllChapters())

    if (typeof data == 'undefined') {
        return (
            <p>No Chapters to display</p>
        )
    }

    const chapters = data.chapters

    return (
        <Section classes="text-center">
            <h2 className="mb-8 sm:mb-12 text-4xl font-extrabold">Surah<span className="text-accent">'s</span></h2>
            <main className="sm:mt-3 sm:mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5">
                {chapters.map((chapter: any, index: number) => {
                    return (
                        <Panel name={chapter['name_simple']} description={chapter['translated_name'].name} icon="play" action={() => playAudio(chapter['id'])}></Panel>
                    )
                })}
            </main>
        </Section>
    )

}

export default Chapters
