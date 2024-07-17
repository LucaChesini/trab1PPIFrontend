import React from "react";
import { Link } from "react-router-dom";
import { logout, obterUsuario } from "./Auth";

const Navbar = () => {
    const usuario = obterUsuario();

    return (
        <nav className="bg-info p-3 mb-4 d-flex align-items-center justify-content-between">
            <Link to={'/'} className="text-decoration-none text-dark">
                <h1 className="mx-2">
                    Kanban
                </h1>
            </Link>
            <div>
                {usuario ? (
                    <>
                        {usuario.role === 'admin' && (
                            <Link to='usuarios' className="btn btn-warning mx-2">
                                Usuários
                            </Link>
                        )}
                        <div className="btn-group">
                            <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {usuario.nome}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#" onClick={logout} className="dropdown-item text-danger">Logout</a></li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar;