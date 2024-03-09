import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from '../../Pages/Form';
import Clientes from '../../Pages/Clientes';
import './styles.css';

const Header = () => {
    return (
        <Router>
            <div className="container">
                <div className="container-title">
                    <h1>SISTEMA DE CLIENTES</h1>
                </div>
                <div className="container-nav">
                    <Link to="/form" className="nav-link">Cadastrar</Link>
                    <Link to="/clientes" className="nav-link">Filtrar / Editar</Link>
                    <Link to="/rota" className="nav-link">Rota</Link>
                </div>
            </div>
                <Routes>
                    <Route path="/form" element={<Form />} />
                    <Route path="/clientes" element={<Clientes />} />
                    {/* Adicione mais rotas conforme necessário */}
                </Routes>
            
        </Router>
    );
}

export default Header;
