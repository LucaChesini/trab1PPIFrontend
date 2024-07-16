import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Mostrar = () => {
    const { cardId } = useParams();
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        axios.get(`http://localhost:3000/api/cards/${cardId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setData(response.data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    if (loading) {
        return (
            <div className="container text-center">
                Carregando...
            </div>
        );
    }

    return (
        <div className="container">
            <div className="d-flex flex-column">
                <ul className="list-unstyled">
                    <li className="mb-1 border-bottom">Título: {data.nome}</li>
                    <li className="mb-1 border-bottom">Descrição: {data.descricao}</li>
                </ul>
                <div className="d-flex justify-content-around">
                    <Link to={`editar`}>
                        <button className="btn btn-info">
                            Editar
                        </button>
                    </Link>
                    <Link to={`deletar`}>
                        <button className="btn btn-danger">
                            Excluir
                        </button>
                    </Link>
                    <Link className="text-decoration-none text-white" to="/">
                        <button type="submit" className="btn btn-secondary">
                            Voltar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Mostrar;