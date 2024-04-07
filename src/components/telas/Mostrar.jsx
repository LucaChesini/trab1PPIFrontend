import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Mostrar = () => {
    // const { cardId } = useParams();
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);

    return (
        <div className="container">
            <div className="d-flex flex-column">
                <ul className="list-unstyled">
                    <li className="mb-1 border-bottom">Título: </li>
                    <li className="mb-1 border-bottom">Descrição: </li>
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