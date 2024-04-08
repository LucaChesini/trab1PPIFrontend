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
        <div className={"w-25 h-100 border-start border-end" + (isOver ? " bg-success-subtle" : "")} ref={drop}>
            <h2 className="text-center border-bottom mb-0">{nome}</h2>
            <div className="w-100 d-flex flex-column align-items-center overflow-y-scroll" style={{height: "calc(100% - 40px)"}}>
                {cards.map((card) => {
                    return (
                        <Card key={card._id} id={card._id} nome={card.nome} descricao={card.descricao} coluna={id}/>
                    );
                })}
            </div>
        </div>
    )
}

export default Coluna;