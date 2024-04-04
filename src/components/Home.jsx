import React from "react";
import Quadro from "./Quadro";

const Home = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <button className="btn btn-success px-4">Criar Nota</button>
            </div>
            <Quadro />
        </div>
    )
}

export default Home;