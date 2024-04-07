import { useEffect, useState } from "react";
import Card from "./Card";
import { useDrop } from "react-dnd";


const Coluna = ({id, nome, cards, onDrop}) => {
    const [ {isOver} , drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => onDrop(item.id, id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    return (
        <div className={"w-25 h-100 border-start border-end d-flex flex-column align-items-center" + (isOver ? " bg-success-subtle" : "")} ref={drop}>
            <h2>{nome}</h2>
            {cards.map((card) => {
                return (
                    <Card key={card.id} id={card.id} nome={card.nome} coluna={id}/>
                );
            })}
        </div>
    )
}

export default Coluna;