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
        <article className="mb-8 grid grid-flow-col gap-3 sm:w-96 mx-auto">
            <div className="w-24 h-24 pb-2/4 relative rounded">
                <img className="w-full h-full absolute object-cover rounded" src={`/src/Assets/Images/${image}`} />
            </div>
            <main className="text-left align-center">
                <h6 className="font-bold">{name}</h6>
                <p className="text-sm">{description}</p>
            </main>
        </article>
    )
}

export default Reciter