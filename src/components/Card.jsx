import React from "react";
import { useDrag } from "react-dnd";

const Card = ({id, nome, coluna}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "card",
        item: {id, coluna},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <div className="border border-2 rounded p-2 mb-2" style={{width: '90%', height: '200px'}} ref={drag}>
            <h3>{nome}</h3>
        </div>
    )
}

export default Card;