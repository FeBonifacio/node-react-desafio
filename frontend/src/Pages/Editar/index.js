import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalCliente from '../../components/Modal'; // Certifique-se de ajustar o caminho conforme necessário

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [clienteSelecionado, setClienteSelecionado] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);

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

    const abrirModal = (cliente) => {
        setClienteSelecionado(cliente);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
    }

    // Para editar o cliente
    const handleEdicao = async (clienteEditado) => {
        try {
            await axios.put(`http://localhost:3000/clientes/${clienteEditado.id}`, clienteEditado);
            const response = await axios.get('http://localhost:3000/clientes'); // Atualizar 
            setClientes(response.data);
            setModalAberto(false); // Fechar o modal após a edição bem-sucedida
        } catch (error) {
            console.error('Erro ao tentar atualizar o cliente', error);
        }
    };

    return (
        <div className="clientes-container">
            <h1>Clientes</h1>
            <table className="clientes-table">
                <thead className="clientes-table-head">
                    <tr>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody className="clientes-table-body">
                    {clientes.map(cliente => (
                        <tr key={cliente.id} onClick={() => abrirModal(cliente)} className="cliente-row">
                            <td className="cliente-nome">{cliente.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {modalAberto && (
                <ModalCliente
                    cliente={clienteSelecionado}
                    onClose={fecharModal}
                    onSave={handleEdicao}
                />
            )}
        </div>
    );
}

export default Clientes;
