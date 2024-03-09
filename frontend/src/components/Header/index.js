import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from '../../Pages/Form';
import Editar from '../../Pages/Editar';
import Buscar from '../../Pages/Buscar';
import Rota from '../../Pages/Rotas';
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
                    <Link to="/buscar" className="nav-link">Clientes</Link>
                    <Link to="/editar" className="nav-link">Editar</Link>
                    <Link to="/rota" className="nav-link">Rota</Link>
                </div>
            </div>
                <Routes>
                    <Route path="/form" element={<Form />} />
                    <Route path="/editar" element={<Editar />} />
                    <Route path="/buscar" element={<Buscar />} />
                    <Route path="/rota" element={<Rota />} />
                </Routes>
            
        </Router>
    );
}

export default Header;
