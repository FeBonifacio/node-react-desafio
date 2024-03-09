import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const Rotas = () => {
    const [rotasCurtas, setRotasCurtas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const buscarRotasCurtas = async () => {
            try {
                const response = await axios.get("http://localhost:3000/rota");
                setRotasCurtas(response.data.rotasMaisCurtas);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        buscarRotasCurtas();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
    <div className="modal-container">
        <div className="modal-content">
            <h2 className="modal-title">Melhores rotas para visita</h2>
            <ul className="modal-list">
                {rotasCurtas && rotasCurtas.map((rota, i) => (
                    // i =1 ,2 , 3 ,4.....
                    <li key={i} className="modal-list-item">
                        Rota {i + 1}: <span className="cliente-nome">{rota.cliente1.nome}</span> - <span className="cliente-nome">{rota.cliente2.nome}</span> (Distância: {rota.distancia})
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
}

export default Rotas;
