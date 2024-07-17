import React, { useRef, useEffect, useState } from "react";
import Coluna from "./Coluna";
import axios from "axios";


const Quadro = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const cardsRef = useRef(cards);
    const token = localStorage.getItem('accessToken');

    const colunas = [
        {id: 1, nome: "Backlog"},
        {id: 2, nome: "Fila"},
        {id: 3, nome: "Fazendo"},
        {id: 4, nome: "Finalizado"},
    ];

    
    useEffect(() => {
        axios.get('http://localhost:3000/api/cards', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setCards(response.data);
            setLoading(false);
        }).catch(err => {
            console.error(err);
        })
    }, []);

    useEffect(() => {
        cardsRef.current = cards;
    }, [cards]);

    function onDrop(cardId, novaColuna) {
        const objeto = {
            coluna: novaColuna,
        }

        axios.put(`http://localhost:3000/api/cards/${cardId}`, objeto, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            const cartasNovas = cardsRef.current.map(card => {
                if (cardId === card.id) {
                    return { ...card, coluna: novaColuna};
                }
                return card;
            });
    
            setCards(cartasNovas);
        }).catch(erro => {
            console.error(erro);
            setIsSubmitting(false);
        })
    }

    if (loading) {
        return(
            <div className="container text-center">
                Carregando...
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-around" style={{height: "calc(100vh - 180px)"}}>
            {colunas.map(coluna => (
                <Coluna key={coluna.id} id={coluna.id} nome={coluna.nome} cards={cards.filter(card => card.coluna == coluna.id)} onDrop={onDrop} />
            ))}
        </div>
    )
}

export default Quadro;