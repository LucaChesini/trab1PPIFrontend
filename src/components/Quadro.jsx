import React, { useEffect, useState } from "react";
import Coluna from "./Coluna";


const Quadro = () => {
    const [cards, setCards] = useState([]);
    const colunas = [
        {id: 1, nome: "backlog"},
        {id: 2, nome: "fila"},
        {id: 3, nome: "fazendo"},
        {id: 4, nome: "finalizado"},
    ];

    function getCards() {
        var cards = [
            {
                id: 1,
                nome: "Card 1",
            },
            {
                id: 2,
                nome: "Card 2",
            },
        ]
    
        return cards;
    }

    useEffect(() => {
        setCards(getCards());
    }, []);

    function onDrop(cardId, novaColuna) {
        console.log(cardId, novaColuna);
        // const updatedCards = cards.map(card => {
        //     if (card.id === cardId) {
        //         return { ...card, column: newColumnId };
        //     }
        //     return card;
        // });
        // setCards(updatedCards);
    }


    return (
        <div className="d-flex justify-content-around h-100">
            {colunas.map(coluna => (
                <Coluna key={coluna.id} nomeColuna={coluna.nome} cards={cards} onDrop={onDrop} />
            ))}
        </div>
    )
}

export default Quadro;