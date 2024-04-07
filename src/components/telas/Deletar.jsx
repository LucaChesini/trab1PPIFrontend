import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Deletar = () => {
    const {cardId} = useParams();
    const [mensagemSucesso, setMensagemSucesso] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.delete(`http://localhost:3000/api/cards/${cardId}`)
        .then(response => {
            if (response.status == 200) {
                setMensagemSucesso('Card deletado com Sucesso');
                setLoading(false);
            }
        }).catch(erro => {
            console.error(erro);
            setLoading(false);
        })
    }, [])

    if (loading) {
        return (
            <div className="container text-center">
                Carregando...
            </div>
        );
    }

    return (
        <div className="container">
            {mensagemSucesso && <p className="alert alert-success">{mensagemSucesso}</p>}
            <button className="btn btn-secondary">
                <Link to="/" className="text-white text-decoration-none">Voltar</Link>
            </button>
        </div>
    )

}

export default Deletar;