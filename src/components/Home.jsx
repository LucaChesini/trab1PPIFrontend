import React from "react";
import Quadro from "./Quadro";
import { Link } from "react-router-dom";
import { obterUsuario } from "./Auth";

const Home = () => {
    return (
        <div className="container" style={{height: "calc(100% - 112px)"}}>
            <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-success px-4">
                    <Link className="text-decoration-none text-white" to="/criar">
                        Criar Nota
                    </Link>
                </button>
            </div>
            <Quadro />
        </div>
    )
}

export default Home;