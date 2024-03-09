const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'clientes',
    password: 'postgres',
    port: 5432,
});

// Verifica se a tabela de clientes já existe
pool.query(`
    SELECT EXISTS (
        SELECT 1
        FROM information_schema.tables
        WHERE table_schema = 'public'
        AND table_name = 'clientes'
    )
`).then(result => {
    const tabelaExiste = result.rows[0].exists;
    if (!tabelaExiste) {
        // Cria a tabela de clientes se ela não existir
        // Criei a tabela aqui para ficar facil a manutenção
        pool.query(`
            CREATE TABLE clientes (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                telefone VARCHAR(255) NOT NULL,
                coordenadaX FLOAT NOT NULL,
                coordenadaY FLOAT NOT NULL
            );
        `).then(() => {
            console.log('Tabela de clientes criada com sucesso');
        }).catch(err => {
            console.error('Erro ao tentar criar tabela de clientes:', err);
        });
    } else {
        console.log('A tabela de clientes já existe');
    }
}).catch(err => {
    console.error('Erro ao verificar a existência da tabela de clientes:', err);
});


// Verificar conexão
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Erro ao conectar com o banco de dados', err);
    } else {
        console.log('Conexão ta boa de mais');
    }
});

module.exports = pool;
