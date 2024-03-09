//AQUI VOU BUSCAR TODOS OS CLIENTES E TAMBEM FILTAR
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BuscarClientes = ({ clienteId }) => {
    const [cliente, setCliente] = useState({});
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [coordenadaX, setCoordenadaX] = useState('');
    const [coordenadaY, setCoordenaday] = useState('');

    useEffect(() => {
        const buscarClientes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/clientes');
                setCliente(response.data);
                // setNome(response.data.nome);
                // setEmail(response.data.email);
                // setTelefone(response.data.telefone);
                // setCoordenadaX(response.data.coordenadaX);
                // setCoordenaday(response.data.coordenadaY);
            } catch (error) {
                console.error('Erro ao buscar clientes', error);
            }
        };

        buscarClientes();
    }, [])
}

const Clientes = () => {

    return (
        <div className='container-lista'>
            { Clientes.map(cliente => (
                <div key={cliente.id} className='cliente'>
                    <h2><span>{cliente.nome}</span></h2>
                    <p>Email: {cliente.email}</p>
                    <p>Telefone: {cliente.telefone}</p>
                    <p>coordenadaX: {cliente.coordenadaX}</p>
                    <p>coordenadaY: {cliente.coordenadaY}</p>
                </div>
            ))}
        </div>
    );
}

export default Clientes;