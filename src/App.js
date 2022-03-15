import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';


const App = () => {
  return (
    <div className='app'>
        <nav className='navbar'>
            <Navbar />
        </nav>
        <main className='main'>
            <div className='routes'>
                <Routes>
                    <Route exact path={"/" || "/crypto-app-react"} element={<Homepage />} />
                    <Route exact path="/exchanges" element={<Exchanges />} />
                    <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                    <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                    <Route exact path="/news" element={<News />} />
                </Routes> 
            </div>
        <footer className='footer' level={5}>
            <Typography.Title style={{color: "white", textAlign: "center"}}>
                Cryptoverse <br />
                All rights reserverd
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </Space>
        </footer>
        </main>
    </div>
  )
}

export default App