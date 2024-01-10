import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { PizzaCreate } from './pages/PizzaCreate';
import { PizzaHome } from './pages/PizzaHome';
import { PizzaPage } from './pages/PizzaPage';
import { PizzaEdit } from './pages/PizzaEdit';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link">
                <span className="nav-link">Pizzas</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/new-pizza`} className="nav-link">
                <span className="nav-link">New pizza</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="*" element={ <PizzaHome /> } />
        <Route path="/" element={ <PizzaHome /> } />
        <Route path="/pizza/:pizzaId" element={ <PizzaPage /> } />
        <Route path="/new-pizza" element={ <PizzaCreate /> } />
        <Route path='/edit-pizza/:pizzaId' element={ <PizzaEdit /> } />
      </Routes>
    </Router>
  );
}

export default App;