import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const Autenticado = !!localStorage.getItem('accessToken');
    return Autenticado ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;