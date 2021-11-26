import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Api from '../../api/api';

const View = () => {
  // inicializa o estado musica para poder fazer as alteracoes do dom.
  const [task, setTask] = useState({});
  // crio o estado de abertura do modal;
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // funcoes de abertura e fechamento do modal
  const OpenModal = () => setOpen(true);
  const CloseModal = () => setOpen(false);

  useEffect(() => {
    getTaskById();
  }, [])

  // acessa o id no parametro da url;
  const { id } = useParams();
  console.log(id);

  // faz a chamada para a api passando o id como parametro para buscar o objeto da musica (invidual por id)
  const getTaskById = async () => {
    const request = await Api.fetchGetById(id);
    const task = await request.json();
    setTask(task);
  }

  const handleDelete = async() => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    if(data.message) {
      console.log('excluido', data.message);
      navigate('/');
    }else {
      alert(data.error);
    }
  }

  return (
    <div className="container"> 
            <h1 className="text-center my-4"><b>Titulo: </b>{task.title}</h1>
            <h3 className="text-center"><b>Descrição: </b>{task.description}</h3>
            <h4 className="text-center"><b>Prioridade: </b> {task.priority}</h4>
            <h5 className="text-center"><b>Status: </b>{task.status}</h5>
            <h6 className="text-center"><b>Prazo Final: </b>{task.deadline}</h6>
            <h6 className="text-center"><b>Data de Criação: </b>{task.creation_date}</h6>
          
            <div className="btn-group mt-3 w-100">
              <Link to={`/edit/${task._id}`} className="btn btn-info">Editar</Link>
              <button className="btn btn-danger" onClick={OpenModal}>Excluir</button>
            </div>
    
      <Modal open={open} onClose={CloseModal} center showCloseIcon={false}>
        <h2 className="my-4">Deseja Realmente Excluir ?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger mr-2" onClick={CloseModal}>Não</button>
          <button className="btn btn-success" onClick={handleDelete}>Sim</button>
        </div>
      </Modal>
    </div>
  )
}

export default View