import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { getAllChapters, getChapterAudio } from '../../Services/ChaptersService'
import Panel from '../../Library/Components/Panel/Panel'
import Section from '../../Library/Components/Section/Section'
import { Howl } from 'howler'

export interface ChaptersProps {

}

const playVerse = (verses: any, index: number, cap: number) => {
    const sound = new Howl({
        src: verses[index].audio.primary,
        html5: true,
    })

    sound.play()

    sound.on('end', () => {
        index++
        if (index < cap) playVerse(verses, index, cap)
    })
}

const playChapter = (chapterAudio: any) => {
    let index = 0;
    playVerse(chapterAudio.verses, index, chapterAudio.numberOfVerses)
}

function Chapters({ }: ChaptersProps) {

    //
    const [chapterID, setChapterID] = useState<number|null>(null)

    //
    const { data: chapterAudio } = useQuery(["chapterAudio", { chapterID }], getChapterAudio)

    //
    useEffect(() => {
        if (chapterAudio != null) playChapter(chapterAudio.data)
    }, [chapterAudio])

    //
    const { data: chapters } = useQuery('chapters', async () => getAllChapters())

    // skip the component entirely if there is no data - in future show a skeletion with a loading indicator instead
    if (typeof chapters == 'undefined') {
        return ( <> </> )
    }

    const control = 'play'

    return (
        <Section classes="text-center">
            <h2 className="mb-8 sm:mb-12 text-4xl font-extrabold">Surah<span className="text-accent">'s</span></h2>
            <main className="sm:mt-3 sm:mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5">
                {chapters.chapters.map((chapter: any) => {
                    return (
                        <Panel key={chapter['id']} name={chapter['name_simple']} description={chapter['translated_name'].name} icon={control} action={() => setChapterID(chapter['id'])}></Panel>
                    )
                })}
            </main>
        </Section>
    )

}

export default Chapters
