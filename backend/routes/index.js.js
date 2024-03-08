const express = require('express');
const app = express();
app.use(express.json()); // Middleware que processa o corpo da requisição em JSON
const pool = require('../index');

// Rota para verificar se o servidor está funcionando
app.get('/', (req, res) => {
    return res.json({ status: 'Funcionando!'})
});

// Rota para criar um novo cliente
app.post('/clientes', async (req, res) => { // Mudança de 'app' para 'server'
    const { nome, telefone, email, coordenadaX, coordenadaY } = req.body;

    try {
        // Inserir os dados do cliente no banco de dados
        const newClient = await pool.query(
            'INSERT INTO clientes (nome, telefone, email, coordenadaX, coordenadaY) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nome, telefone, email, coordenadaX, coordenadaY]
        );

        // Retornar os dados do novo cliente inserido
        res.status(201).json(newClient.rows[0]);
    } catch (error) {
        // Logar o erro no console
        console.error('Erro ao criar cliente:', error);

        // Retornar uma resposta de erro com status 500 e mensagem específica de erro
        res.status(500).json({ mensagem: 'Erro ao criar cliente', erro: error.message });
    }
});

// Rota para buscar todos os clientes
app.get('/clientes', async (req, res) => {
    try {
        //consultar pelo banco
        const clientes = await pool.query('SELECT * FROM clientes');

        //Pegar
        res.status(200).json(clientes.rows);
    } catch (error) {
        //tratar caso tenha algum erro
        console.error('Erro a buscar clientes', error);
        res.status(500).json({ message: 'Erro a buscar clientes' });
    }
});

// Rota editar cliente por ID
// Rota para atualizar um cliente pelo ID
app.put('/clientes/:id', async (req, res) => {
    const clienteId = req.params.id; // Obtém o ID do cliente a ser atualizado
    const { nome, telefone, email, coordenadaX, coordenadaY } = req.body; // Obtém os novos dados do cliente a partir do corpo da requisição

    try {
        // Verifica se o cliente com o ID fornecido existe no banco de dados
        const clienteExistente = await pool.query('SELECT * FROM clientes WHERE id = $1', [clienteId]);
        
        // Se o cliente não existir, retorna um erro 404 (Not Found)
        if (clienteExistente.rows.length === 0) {
            return res.status(404).json({ mensagem: 'Cliente não encontrado' });
        }

        // Atualiza o cliente no banco de dados com os novos dados fornecidos
        const clienteAtualizado = await pool.query(
            'UPDATE clientes SET nome = $1, telefone = $2, email = $3, coordenadaX = $4, coordenadaY = $5 WHERE id = $6 RETURNING *',
            [nome, telefone, email, coordenadaX, coordenadaY, clienteId]
        );

        // Retorna os dados do cliente atualizado
        res.status(200).json(clienteAtualizado.rows[0]);
    } catch (error) {
        // Trata qualquer erro que possa ocorrer durante o processo
        console.error('Erro ao atualizar cliente:', error);
        res.status(500).json({ mensagem: 'Erro ao atualizar cliente' });
    }
});


// Rota deletar cliente por ID
app.delete('/clientes/:id', async (req, res) => {
    const clienteId = req.params.id;

    try {
        const clienteExistente = await pool.query('SELECT * FROM clientes WHERE ID = $1', [clienteId]);

        if (clienteExistente.rows.length === 0) {
            return res.status(404).json({ message: 'Cliente não existe' });
        }

        await pool.query('DELETE FROM clientes WHERE ID = $1', [clienteId]);
        
        res.status(200).json({ message: 'Cliente deletado!' });
    } catch (error) {
        console.error('Erro ao deletar cliente', error);
        res.status(500).json({ message: 'Erro ao deletar cliente' });
    }
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
