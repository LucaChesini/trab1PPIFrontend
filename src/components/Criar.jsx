import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Criar = () => {
    const { register, handleSubmit, setValue, reset, formState: {errors}} = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mensagemSucesso, setMensagemSucesso] = useState(null);

    const onSubmit = (data) => {
        console.log('Teste');
    //     if (isSubmitting) return;

    //     setIsSubmitting(true);

    //     const dataFormatada = new Date(data.publishDate).toISOString();

    //     const objeto = {
    //         title: data.title,
    //         description: data.description,
    //         pageCount: data.pageCount,
    //         excerpt: data.excerpt,
    //         publishDate: dataFormatada,
    //     }

    //     axios.post(`http://localhost:3000/api/livros`, objeto)
    //     .then(response => {
    //         if (response.status == 200){
    //             setMensagemSucesso('Livro Cadastrado com Sucesso');
    //         }
    //         setIsSubmitting(false);
    //         reset();

    //         setTimeout(() => {
    //             setMensagemSucesso(null);
    //         }, 4000);
    //     }).catch(erro => {
    //         console.error(erro);
    //         setIsSubmitting(false);
    //     })
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="w-50">
                    <h2>Criar novo livro</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex flex-column mb-2">
                            <label htmlFor="title" className="form-label mb-0">Título</label>
                            <input className="form-control" type="text" id="title" {...register('title', {required: 'Campo Obrigatório'})} />
                            {errors.title && <p className="text-danger erro my-0">{errors.title.message}</p>}
                        </div>
                        <div className="d-flex flex-column mb-2">
                            <label htmlFor="description" className="form-label mb-0">Descrição</label>
                            <textarea className="form-control" id="description" {...register('description', {required: 'Campo Obrigatório'})} />
                            {errors.description && <p className="text-danger erro my-0">{errors.description.message}</p>}
                        </div>
                        <div className="d-flex justify-content-around">
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