import React from 'react'
import { useQuery } from 'react-query'

function Chapters(props) {

    const fetchAllChapters = async () => {
        return (await fetch(`${props.baseURL}/chapters?language=en`)).json()
    }

    const { data, error, status } = useQuery('chapters', fetchAllChapters)

    if (typeof data == 'undefined') {
        return (
            <p>No Chapters to display</p>
        )
    }

    const chapters = data.chapters

    return (
        <div>

            <h2>Chapters</h2>

            <ul className="chapters-list">
                {chapters.map((chapter:any, index:number) => {
                    return <li key={index} className="chapter"> 
                        <span className="chapterID"> {chapter.id}. </span> 
                        <span className="chapterName"> {chapter['name_simple']} </span>
                        <span className="chapterNameMeaning"> {chapter['translated_name'].name} </span>
                    </li>
                })}
            </ul>

        </div>
    )

}

export default Chapters
