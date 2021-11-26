import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();
  //declarar o estado da musica
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: '',
    status: '',
    deadline: '',
    creation_date: ''    
  });
  
  useEffect(() => {
    getTaskById();
  }, []);

  // buscar a musica que ja foi cadastrado no banco.
  // buscar a musica pelo o id passado via parametro da url.
  const { id } = useParams();

  //buscar a musica por id;
  const getTaskById = async () => {
  const request = await Api.fetchGetById(id);
  const task = await request.json();
  setTask(task);
  };

  const handleFieldsChange = (evento) => {
    // copio o objeto do estado.
    const taskEdit = { ...task };
    // musicaEdit['nome'] = 'novo valor'
    // atualiza os campos do objeto de forma dinamica de acordo com o input que o usuario digitou
    taskEdit[evento.target.name] = evento.target.value;
    // atualzo estado musica
    setTask(taskEdit);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const request = await Api.fetchPut(task, id);
    const data = await request.json();
    alert(data.message);
    navigate(`/TaskView/${id}`);
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Editar Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="title">Título:</label>
                  <input
                    id="title"
                    className="form-control"
                    type="text"
                    placeholder="Título"
                    value={task.title}
                    onChange={handleFieldsChange}
                    name="title"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="description">Descrição</label>
                  <input
                    id="description"
                    type="text"
                    className="form-control"
                    placeholder="Descrição"
                    onChange={handleFieldsChange}
                    value={task.description}
                    name="description"
                  />
                </div>
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
              
              <div className="col-4 d-flex align-items-end justify-content-around">
                
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>                

                <Link to={`/TaskView/${task._id}`}>
                <button type="button" className="btn btn-danger">
                  Cancelar
                </button>
              </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;