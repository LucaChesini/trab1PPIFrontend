import React, { useRef, useEffect, useState } from "react";
import Coluna from "./Coluna";


const Quadro = () => {
    const [cards, setCards] = useState([]);
    const cardsRef = useRef(cards);

    const colunas = [
        {id: 1, nome: "Backlog"},
        {id: 2, nome: "Fila"},
        {id: 3, nome: "Fazendo"},
        {id: 4, nome: "Finalizado"},
    ];

    
    useEffect(() => {
        const cartas = [
            {
                id: 1,
                nome: "Card 1",
                coluna: 1
            },
            {
                id: 2,
                nome: "Card 2",
                coluna: 1
            },
            {
                id: 3,
                nome: "Card 3",
                coluna: 2
            },
            {
                id: 4,
                nome: "Card 4",
                coluna: 3
            },
            {
                id: 5,
                nome: "Card 5",
                coluna: 4
            },
        ];

        setCards(cartas);

    }, []);

    useEffect(() => {
        cardsRef.current = cards;
    }, [cards]);

    function onDrop(cardId, novaColuna) {
        const cartasNovas = cardsRef.current.map(card => {
            if (cardId === card.id) {
                return { ...card, coluna: novaColuna};
            }
            return card;
        });

        setCards(cartasNovas);
    }

    return (
        <div className="d-flex justify-content-around h-100">
            {colunas.map(coluna => (
                <Coluna key={coluna.id} id={coluna.id} nome={coluna.nome} cards={cards.filter(card => card.coluna === coluna.id)} onDrop={onDrop} />
            ))}
        </div>
    )
}

export default Quadro;