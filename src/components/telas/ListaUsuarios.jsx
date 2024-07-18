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
            <ul className='list-group'>
            {usuarios.map(usuario => (
                <li key={usuario.id} className='list-group-item'>
                {usuario.nome} ({usuario.role})
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ListaUsuarios;