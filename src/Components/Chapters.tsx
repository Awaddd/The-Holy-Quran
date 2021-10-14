import React from 'react'
import { useQuery } from 'react-query'
import { getAllChapters } from '../Services/ChaptersService'
import Panel from '../Library/Components/Panel/Panel'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

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
            <Grid>
                <Row>
                    {chapters.map((chapter: any, index: number) => {
                        return (
                            <Col xs={12} md={4}><Panel name={chapter['name_simple']} description={chapter['translated_name'].name}></Panel></Col>
                        )
                    })}
                </Row>
            </Grid>
        </section>
    )

}

export default Chapters
