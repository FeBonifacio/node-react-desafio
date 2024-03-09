import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllClientes = () => {
    const [clientes, setClientes] = useState([]);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        const buscarClientes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/clientes');
                setClientes(response.data);
            } catch (error) {
                console.error('Erro ao buscar clientes', error);
            }
        };

        buscarClientes();
    }, []);

    const filtrar = (cliente) => {
        const filtroLowerCase = filtro.toLowerCase();
        return (
            cliente.nome.toLowerCase().includes(filtroLowerCase) ||
            cliente.email.toLowerCase().includes(filtroLowerCase) ||
            cliente.telefone.includes(filtro) ||
            cliente.coordenadax.toString().includes(filtro) ||
            cliente.coordenaday.toString().includes(filtro)
        );
    };

    return (
    <div className="clientes-container">
        <h1>Clientes</h1>
        <input 
            type="text" 
            className="filtro-input" 
            placeholder='nome, email, telefone' 
            value={filtro} 
            onChange={(e) => setFiltro(e.target.value)} 
        />

        <table className="clientes-table">
            <thead className="clientes-table-head">
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>CoordenadaX</th>
                    <th>CoordenadaY</th>
                </tr>
            </thead>
            <tbody className="clientes-table-body">
                {clientes.filter(filtrar).map(cliente => (
                    <tr key={cliente.id} className="cliente-row">
                        <td className="cliente-nome">{cliente.nome}</td>
                        <td className="cliente-email">{cliente.email}</td>
                        <td className="cliente-telefone">{cliente.telefone}</td>
                        <td className="cliente-coordenadaX">{cliente.coordenadax}</td>
                        <td className="cliente-coordenadaY">{cliente.coordenaday}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    );
}

export default AllClientes;
