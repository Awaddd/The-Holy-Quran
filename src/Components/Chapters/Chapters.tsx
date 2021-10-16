import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getAllChapters } from '../../Services/ChaptersService'
import { useRecoilState } from 'recoil'
import { chaptersState } from '../../State/state'
import Section from '../../Library/Components/Section/Section'
import Chapter from '../Chapter/Chapter'

export interface ChaptersProps {

}

function Chapters({ }: ChaptersProps) {

    //
    const { data } = useQuery('chapters', async () => getAllChapters())
    const [chapters, setChapters] = useRecoilState(chaptersState)

    useEffect(() => {
        if (data != null) setChapters(data.chapters)
    }, [data])

    // skip the component entirely if there is no data - in future show a skeletion with a loading indicator instead
    if (typeof chapters == 'undefined' || chapters == null || chapters == []) {
        return ( <> </> )
    if (typeof data == 'undefined' || data == null || data == {}) {
        return (
            <Section classes="text-center bg-gray-900 text-white">
                <h2 className="text-error font-extrabold text-4xl">Sorry!</h2>
                <p className="mt-4 text-1xl font-semibold">Nothing to see here :( </p>
            </Section>
        )
    }

    return (
        <Section classes="text-center">
            <h2 className="mb-8 sm:mb-12 text-4xl font-extrabold">Surah<span className="text-accent">'s</span></h2>
            <main className="sm:mt-3 sm:mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5">
                {chapters.map((chapter: any) => {
                    return (
                        <Chapter key={chapter['id']} chapter={chapter} />
                    )
                })}
            </main>
        </Section>
    )

}

export default Chapters
