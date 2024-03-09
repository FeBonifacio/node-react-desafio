import React, { useState, useEffect } from "react";
import './styles.css'

const ModalCliente = ({ cliente, onClose, onSave }) => {
    const [clienteEditado, setClienteEditado] = useState(cliente);

    useEffect(() => {
        setClienteEditado(cliente); // Atualizar clienteEditado quando cliente mudar
    }, [cliente]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClienteEditado({ ...clienteEditado, [name]: value });
    };

    const handleSalvar = async () => {
        onSave(clienteEditado); // Usar clienteEditado para salvar as alterações
        alert('Cliente editado com sucesso!')
    }

    const handleClose = () => {
        onClose();
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>Informações do Cliente</h2>
                <form>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={clienteEditado.nome}
                        onChange={handleChange}
                    />
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={clienteEditado.email}
                        onChange={handleChange}
                    />
                    <label>Telefone:</label>
                    <input
                        type="text"
                        name="telefone"
                        value={clienteEditado.telefone}
                        onChange={handleChange}
                    />
                    <label>CoordenadaX:</label>
                    <input
                        type="number"
                        name="coordenadaX"
                        value={clienteEditado.coordenadaX}
                        onChange={handleChange}
                    />
                    <label>CoordenadaY:</label>
                    <input
                        type="number"
                        name="coordenadaY"
                        value={clienteEditado.coordenadaY} 
                        onChange={handleChange}
                    />
                    <button type="button" onClick={handleSalvar}>Editar</button>
                </form>
            </div>
        </div>
    );
}

export default ModalCliente;
