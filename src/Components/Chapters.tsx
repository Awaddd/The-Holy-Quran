import React from 'react'
import { useQuery } from 'react-query'
import { getAllChapters } from '../Services/ChaptersService'
import Panel from '../Library/Components/Panel'

export interface ChaptersProps {

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
        <section>
            <h2>Chapters</h2>
            {chapters.map((chapter: any, index: number) => {
                return <Panel name={chapter['name_simple']} description={chapter['translated_name'].name}></Panel>
            })}
        </section>
    )

}

export default Chapters
