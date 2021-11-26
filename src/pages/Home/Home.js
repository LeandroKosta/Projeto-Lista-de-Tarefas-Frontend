import React from "react";
import ListTask from "../../components/structure/ListTask/ListTask";
import "./Home.css";

const Home = () => {
  return (
    <div className="container home">
      <h1 className="text-center">Lista de Tarefas</h1>
      <ListTask />
    </div>
  );
};

export default Home;
