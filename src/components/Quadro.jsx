import React from "react";
import Coluna from "./Coluna";

const Quadro = () => {
    return (
        <div className="d-flex justify-content-around">
            <Coluna></Coluna>
            <Coluna></Coluna>
            <Coluna></Coluna>
            <Coluna></Coluna>
        </div>
    )
}

export default Quadro;