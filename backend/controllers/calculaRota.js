const express = require('express');
const router = express.Router();
const pool = require('../index');


function calcularDistancia(a, b) {
    const distancia = Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
    return distancia;
}

async function calcularRota() {
    try {
        const query = 'SELECT  coordenadaX, coordenadaY FROM clientes';
        const result = await pool.query(query);
        const coordenadasClientes = result.rows.map(cliente => [cliente.coordenadaX, cliente.coordenadaY]);

        let melhorRota = [];
        let menorDistancia = Infinity;

        function calcularDistTotal(rota) {
            let distanciaTotal = 0;
            for (let i = 0; i < rota.length - 1; i++) {
                distanciaTotal += calcularDistancia(rota[i], rota[i + 1]);
            }
            return distanciaTotal;
            
        }

        function permutar(lista) {
            if (lista.length === 0) {
                const distancia = calcularDistTotal(melhorRota);
                if (distancia < menorDistancia) {
                    menorDistancia = distancia;
                    melhorRota = lista.slice(); 
                }
            } else {
                for (let i = 0; i < lista.length; i++) {
                    const elemento = lista.splice(i, 1)[0];
                    melhorRota.push(elemento);
                    permutar(lista);
                    lista.splice(i, 0, elemento);
                    melhorRota.pop();
                }
            }
        }

        permutar(coordenadasClientes);

        return melhorRota;
    } catch (error) {
        console.log('Erro ao calcular rota', error);
        throw error;
    }
}

function rotaCalculoRota() {
    return async (req, res) => {
        try {
            const melhorRota = await calcularRota();
            res.json({ rota: melhorRota });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao calcular rota' });
        }
    };
}

module.exports = rotaCalculoRota;
