import React, { useState } from 'react';
import axios from 'axios';

import './styles.css';

const Form = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [coordenadaX, setCoordenadaX] = useState("");
    const [coordenadaY, setCoordenadaY] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Criar novo cliente
        try {
            const response = await axios.post('http://localhost:3000/clientes', {
                nome,
                email,
                telefone,
                coordenadaX,
                coordenadaY,
            });

            alert('Cliente criado!')

            console.log('Cliente criado!', response.data);
        } catch (error) {
            console.error('Erro ao criar cliente!', error);
        }

        setNome('');
        setEmail('');
        setTelefone('');
        setCoordenadaX('');
        setCoordenadaY('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="telefone">Telefone</label>
                <input
                    type="text"
                    id="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="coordenadaX">Coordenada X</label>
                <input
                    type="number"
                    id="coordenadaX"
                    value={coordenadaX}
                    onChange={(e) => setCoordenadaX(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="coordenadaY">Coordenada Y</label>
                <input
                    type="number"
                    id="coordenadaY"
                    value={coordenadaY}
                    onChange={(e) => setCoordenadaY(e.target.value)}
                />
            </div>
            <div className='btn-container'>
                <button className='btn' type="submit">Cadastrar</button>
            </div>
        </form>
    );
    
};

export default Form;
