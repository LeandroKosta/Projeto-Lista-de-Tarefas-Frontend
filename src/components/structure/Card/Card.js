import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const task = props.data;
  return (
    <Link to={`/TaskView/${task._id}`} className="col">
      <div className="card">             
          <h5>{task.title}</h5>
          <span>Descrição: {task.description}</span>
          <br />
          <span>Prioridade: {task.priority}</span>
          <br />
          <span>Status: {task.status}</span>
          <br />
          <span>Prazo: {task.deadline}</span>
          <br />               
      </div>
    </Link>
  );
};

export default Card;