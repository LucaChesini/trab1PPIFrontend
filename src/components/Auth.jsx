import { jwtDecode } from "jwt-decode";

export const obterUsuario = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken;
    } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        return null;
    }
};