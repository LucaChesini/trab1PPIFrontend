import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = () => {
    const token = localStorage.getItem('accessToken');

    const tokenExpirado = (token) => {
        if (!token) {
            return true;
        }
        
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        return decodedToken.exp < currentTime;
    }
    
    const Autenticado = !!token && !tokenExpirado(token);
    return Autenticado ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;