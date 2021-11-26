const Api = {
  apiUrl: "https://backend-lista-de-tarefas-lk.herokuapp.com/todolist",
  
  fetchGetAll: () => fetch(Api.apiUrl),
  fetchGetById: (id) => fetch(`${Api.apiUrl}/${id}`),
  fetchPost: (data) => {
    return fetch(`${Api.apiUrl}/add`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  },
  fetchPut: (task, id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: "DELETE",
    });
  },
};

export default Api;
