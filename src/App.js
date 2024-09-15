import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Quiz from "./components/Quiz";
import Home from "./components/Home";
import Account from "./components/Account";
import { FaRegLemon } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">  
            <FaRegLemon /> sQuizzy
          </div>
          <ul className="nav-links">
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/quiz">Квізи</Link></li>
            <li><Link to="/account">Аккаунт</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
