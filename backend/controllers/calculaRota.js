const express = require('express');
const pool = require('../index');

async function calcularRota() {
    try {
        const query = 'SELECT id, nome, coordenadaX, coordenadaY FROM clientes'; //buscar
        const result = await pool.query(query);
        const coordenadasClientes = result.rows.map(cliente => ({
            id: cliente.id,
            nome: cliente.nome,
            coordenadax: cliente.coordenadax,
            coordenaday: cliente.coordenaday
        }));

        //console.log(coordenadasClientes); //ok

        let rotasMaisCurtas = [];

        for (let i = 0; i < coordenadasClientes.length; i++) {
            for (let j = i + 1; j < coordenadasClientes.length; j++) {
                const distancia = calcularDistancia(
                    coordenadasClientes[i],
                    coordenadasClientes[j]
                );

                //console.log(distancia); //OK

                rotasMaisCurtas.push({
                    cliente1: {
                        id: coordenadasClientes[i].id,
                        nome: coordenadasClientes[i].nome
                    },
                    cliente2: {
                        id: coordenadasClientes[j].id,
                        nome: coordenadasClientes[j].nome
                    },
                    distancia: distancia
                });

                //console.log(rotasMaisCurtas); ok
            }
        }

        rotasMaisCurtas.sort((a, b) => a.distancia - b.distancia);

        return rotasMaisCurtas.slice(0, 4);

    } catch (error) {
        console.error('Erro ao calcular rota:', error);
        throw error;
    }
}

//CALCULO DAS DISTANCIAS
function calcularDistancia(a, b) {
    return Math.sqrt(Math.pow(a.coordenadax - b.coordenadax, 2) + Math.pow(a.coordenaday - b.coordenaday, 2));
}

function rotaCalculoRota() {
    return async (req, res) => {
        try {
            const melhoresRotas = await calcularRota();
            res.json({ rotasMaisCurtas: melhoresRotas });
        } catch (error) {
            console.error('Erro ao calcular rota:', error);
            res.status(500).json({ message: 'Erro ao calcular rota' });
        }
    };
}

module.exports = rotaCalculoRota;
