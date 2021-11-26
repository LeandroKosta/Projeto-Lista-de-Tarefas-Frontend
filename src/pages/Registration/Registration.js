import React from "react";
import "./Registration.css";
import Api from "../../api/api";
import { useNavigate } from 'react-router-dom';

const Registration = (props) => {
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    console.log(evento.target);
    const title = evento.target.title.value;
    const description = evento.target.description.value;
    const priority = evento.target.priority.value;
    const status = evento.target.status.value;
    const deadline = evento.target.deadline.value;


    const task = {
      title,
      description,
      priority,
      status,
      deadline,

    };

    const request = await Api.fetchPost(task);
    if(request.status === 500) {
      alert('ERRO NO SERVIDOR')
    }
    const result = await request.json();
    if(result.error) {
      console.log(result.error);
    }else {
      alert(result.message);
      navigate('/');
    }
  }
  return (
    <div className="container cadastro">
      <div className="base mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col subtitle ">
              <h3>Cadastrar Nova Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form className="todo-form mt-5" onSubmit={handleSubmit}>
            <>
              <div className="row">
                <div className="col md-6 mt-2">
                  <label>Tarefa: </label>
                  <input
                    type="text"
                    className="todo-input"
                    placeholder="Adicione uma nova tarefa"
                    name="title"
                    id="title"
                  />
                </div>

                <div className="col md-6 mt-2">
                  <label>Descrição: </label>
                  <input
                    type="text"
                    className="todo-input"
                    placeholder="Descreva sua tarefa"
                    name="description"
                    id="description"
                  />
                </div>

                <div className="col md-6 mt-2">
                  <label>Prioridade: </label>
                  <select className="todo-input" name="priority" id="priority">
                    <option value="vazio"></option>
                    <option value="Baixa">Baixa</option>
                    <option value="Media">Média</option>
                    <option value="Alta">Alta</option>
                  </select>
                </div>

                <div className="col md-6 mt-4">
                  <label>Status: </label>
                  <select className="todo-input" name="status" id="status">
                    <option value="vazio"></option>
                    <option value="Feito">Feito</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Fazer">Fazer</option>
                  </select>
                </div>

                <div className="col md-6 mt-4">
                  <label>Prazo: </label>
                  <input
                    className="todo-input"
                    type="date"
                    id="data"
                    name="deadline"
                    maxLength="10"
                    size=""
                  />
                </div>
              </div>

              <div className="row">
                <div className="mt-5">
                  <button className="todo-button" type="submit">
                    Adicionar Tarefa
                  </button>
                </div>
              </div>
            </>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
