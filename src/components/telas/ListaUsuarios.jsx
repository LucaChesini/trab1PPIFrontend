import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        axios.get('http://localhost:3000/api/usuarios', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setUsuarios(response.data);
        }).catch(err => {
            console.error(err);
        })
    }, []);

    return (
        <div className="container">
            <ul>
            {usuarios.map(usuario => (
                <li key={usuario.id}>
                {usuario.nome} ({usuario.role})
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ListaUsuarios;