import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-info p-3 mb-4 d-flex align-items-center justify-content-center">
            <Link to={'/'} className="text-decoration-none text-dark">
                <h1 className="mx-2">
                    Kanban
                </h1>
            </Link>
        </nav>
    )
}

export default Navbar;