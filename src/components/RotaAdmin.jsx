import React from 'react';
import { Route, Link, Navigate } from 'react-router-dom';
import { obterUsuario } from './Auth';
import ListaUsuarios from './telas/ListaUsuarios';

const RotaAdmin = () => {
    const usuario = obterUsuario();

    return usuario.role == 'admin' ? <ListaUsuarios /> : <Navigate to="/" />;

};

export default RotaAdmin;