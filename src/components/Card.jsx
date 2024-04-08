import React from "react";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";

const Card = ({id, nome, coluna, descricao}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "card",
        item: {id, coluna},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const tituloStyle = {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    };

    const textoStyle = {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
    };

    return (
        <div className="border border-2 rounded mt-2 bg-dark-subtle" style={{width: '90%', minHeight: '200px'}} ref={drag}>
            <Link to={`${id}`} className="text-decoration-none text-dark">
                <div className="h-100 p-2 overflow-hidden">
                    <h3 style={tituloStyle}>{nome}</h3>
                    <p style={textoStyle}>{descricao}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;