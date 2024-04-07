import { useEffect, useState } from "react";
import Card from "./Card";
import { useDrop } from "react-dnd";


const Coluna = ({nomeColuna, cards}) => {
    // const [cards, setCards] = useState([]);
    const [ {isOver} , drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => onDrop(item.id, nomeColuna),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));
    
    // function getCards() {
    //     var cards = [
    //         {
    //             id: 1,
    //             nome: "Card 1",
    //         },
    //         {
    //             id: 2,
    //             nome: "Card 2",
    //         },
    //     ]
    
    //     return cards;
    // }

    // useEffect(() => {
    //     setCards(getCards());
    // }, []);

    return (
        <div className="w-25 h-100 border-start border-end d-flex flex-column align-items-center" ref={drop}>
            {cards.map((card) => {
                return <Card key={card.id} id={card.id} nome={card.nome} coluna={nomeColuna}/>
            })}
        </div>
    )
}

export default Coluna;