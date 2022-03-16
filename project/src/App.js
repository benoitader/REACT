import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Home, Cryptomonnaies, Actualites } from './components';
import './App.css'

const App = () => {
    return (
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cryptomonnaies" element={<Cryptomonnaies/>}/>
                <Route path="/actualites" element={<Actualites/>}/>
              </Routes>
            </div>
          </Layout>
          <div className="footer" level={5}>
            <Typography.Title>
              Cryptoviews <br />
              Tous droits réservés
            </Typography.Title>
            <Space>
              <Link to="/">Accueil</Link>
              <Link to="/actualites">Actualités</Link>
            </Space>
          </div>
        </div>
      </div>
    );
}

export default App
