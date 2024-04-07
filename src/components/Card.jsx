import React from "react";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";

const Card = ({id, nome, coluna}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "card",
        item: {id, coluna},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const textoStyle = {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
    };

    return (
        <div className="border border-2 rounded mb-2 bg-dark-subtle" style={{width: '90%', height: '200px'}} ref={drag}>
            <Link to={`${id}`} className="text-decoration-none text-dark">
                <div className="h-100 p-2">
                    <h3>{nome}</h3>
                    <p style={textoStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officiis mollitia corporis maxime itaque! Enim vitae iusto dolore ullam illum animi, ratione provident natus. Consequuntur eos quaerat iure obcaecati atque?</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;