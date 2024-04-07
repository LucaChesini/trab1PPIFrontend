import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Criar = () => {
    const { register, handleSubmit, setValue, reset, formState: {errors}} = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mensagemSucesso, setMensagemSucesso] = useState(null);

    const onSubmit = (data) => {
        if (isSubmitting) return;
        
        setIsSubmitting(true);
        
        const objeto = {
            nome: data.nome,
            descricao: data.descricao,
            coluna: 1
        }

        axios.post(`http://localhost:3000/api/cards`, objeto)
        .then(response => {
            if (response.status == 200){
                setMensagemSucesso('Card Cadastrado com Sucesso');
            }
            setIsSubmitting(false);
            reset();

            setTimeout(() => {
                setMensagemSucesso(null);
            }, 4000);
        }).catch(erro => {
            console.error(erro);
            setIsSubmitting(false);
        })
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="w-50">
                    {mensagemSucesso && <p className="alert alert-success">{mensagemSucesso}</p>}
                    <h2>Criar novo card</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex flex-column mb-2">
                            <label htmlFor="nome" className="form-label mb-0">Título</label>
                            <input className="form-control" type="text" id="nome" {...register('nome', {required: 'Campo Obrigatório'})} />
                            {errors.nome && <p className="text-danger erro my-0">{errors.nome.message}</p>}
                        </div>
                        <div className="d-flex flex-column mb-2">
                            <label htmlFor="descricao" className="form-label mb-0">Descrição</label>
                            <textarea className="form-control" id="descricao" {...register('descricao', {required: 'Campo Obrigatório'})} />
                            {errors.descricao && <p className="text-danger erro my-0">{errors.descricao.message}</p>}
                        </div>
                        <div className="d-flex justify-content-around">
                            <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                                {isSubmitting ? 'Enviando...' : 'Enviar'}
                            </button>
                            <button type="submit" className="btn btn-secondary">
                                <Link className="text-decoration-none text-white" to="/">
                                    Voltar
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Criar;