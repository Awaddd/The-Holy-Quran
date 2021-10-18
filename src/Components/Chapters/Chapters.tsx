import React from 'react'
import { useQuery } from 'react-query'
import { getAllChapters } from '../../Services/ChaptersService'
import Section from '../../Library/Components/Section/Section'
import Chapter from '../Chapter/Chapter'
import { getChapterAudio } from '../../Services/ChaptersService'
import { selectedReciterState } from '../../State/state'
import { useRecoilValue } from 'recoil'

export interface ChaptersProps {

}

function Chapters({ }: ChaptersProps) {

    let { data } = useQuery('chapters', async () => getAllChapters())
    const selectedReciter = useRecoilValue(selectedReciterState)

    if (typeof data == 'undefined' || data == null || data == {}) {
        return (
            <Section classes="text-center bg-gray-900 text-white">
                <h2 className="text-error font-extrabold text-4xl">Sorry!</h2>
                <p className="mt-4 text-1xl font-semibold">Nothing to see here :( </p>
            </Section>
        )
    }

    const chapters = data.chapters.map(chapter => {
        return {
            id: chapter.id,
            name: chapter['name_simple'],
            meaning: chapter['translated_name'].name,
            source: getChapterAudio(String(chapter.id).padStart(3, '0'), selectedReciter.id),
            control: 'play'
        }
    })
    
    return (
        <Section classes="text-center">
            <h2 className="mb-8 sm:mb-12 text-4xl font-extrabold">Surah<span className="text-accent">'s</span></h2>
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

export default Chapters
