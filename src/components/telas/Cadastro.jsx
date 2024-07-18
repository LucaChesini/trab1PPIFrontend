import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Cadastro = () => {
    const { register, handleSubmit, setValue, reset, formState: {errors}} = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mensagemSucesso, setMensagemSucesso] = useState(null);
    const [mensagemErro, setMensagemErro] = useState(null);
    const navegar = useNavigate();

    const onSubmit = (data) => {
        if (isSubmitting) return;
        
        const objeto = {
            nome: data.nome,
            senha: data.senha
        }

        axios.post(`http://localhost:3000/api/usuarios`, objeto)
        .then(response => {
            setIsSubmitting(false);
            navegar('/login');
        }).catch(erro => {
            console.error(erro);
            setMensagemErro('Nome de usuário ou senha incorretos');
            setIsSubmitting(false);
        })
    }

    return (
        <div className='container'>
            <div className="d-flex justify-content-center">
                <div className="w-50">
                    <h2>Cadastrar Conta</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex flex-column mb-2">
                            <label htmlFor="nome" className="form-label mb-0">Nome</label>
                            <input className="form-control" type="text" id="nome" {...register('nome', {required: 'Campo Obrigatório'})} />
                            {errors.nome && <p className="text-danger erro my-0">{errors.nome.message}</p>}
                        </div>
                        <div className="d-flex flex-column mb-2">
                            <label htmlFor="senha" className="form-label mb-0">Senha</label>
                            <input className="form-control" id="senha" type="password" {...register('senha', {required: 'Campo Obrigatório'})} />
                            {errors.senha && <p className="text-danger erro my-0">{errors.senha.message}</p>}
                        </div>
                        <div className="d-flex justify-content-around">
                            <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                                {isSubmitting ? 'Enviando...' : 'Enviar'}
                            </button>
                            <button type="submit" className="btn btn-secondary">
                                <Link className="text-decoration-none text-white" to="/login">
                                    Voltar
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
