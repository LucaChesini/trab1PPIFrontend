import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Deletar = () => {
    // const {cardId} = useParams();
    const [mensagemSucesso, setMensagemSucesso] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <div className="container">
            {/* {mensagemSucesso && <p className="alert alert-success">{mensagemSucesso}</p>} */}
            <button className="btn btn-secondary">
                <Link to="/" className="text-white text-decoration-none">Voltar</Link>
            </button>
        </div>
    )

}

export default Deletar;