import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/registration">Cadastrar Tarefa</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
