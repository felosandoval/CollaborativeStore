// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ShowProducts from './pages/ShowProducts';
import Sidebar from './components/SideBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="store-title"> Los Komercios</h1>
        </header>
        <div className="main-container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/crearproducto" element={<ProductsPage />} />
              <Route path="/verproducto" element={<ShowProducts />} />
            </Routes>
          </main>
        </div>
        <footer>
          <p>&copy; {new Date().getFullYear()} Los Komercios</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
