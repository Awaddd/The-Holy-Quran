import React from "react"

export interface ReciterProps {
    reciter: {
        name: string
        id: string
        description: string
        image: string
    }
}

function Reciter({ reciter }: ReciterProps) {

    const { name, id, description, image } = reciter

    return (
        <article className="mb-8 flex gap-3 sm:w-96 mx-auto">
            <img className="rounded w-24 h-24 cursor-pointer" src={image} alt="" />
            <main className="text-left align-center">
                <h6 className="font-bold">{name}</h6>
                <p className="text-sm">{description}</p>
            </main>
        </article>
    )
}

export default Reciter