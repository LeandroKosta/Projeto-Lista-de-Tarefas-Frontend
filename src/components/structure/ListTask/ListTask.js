import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Api from "../../../api/api";

const ListTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const request = await Api.fetchGetAll();
    const data = await request.json();
    setTasks(data);
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {tasks.map((task) => (
        <Card data={task} key={task._id} />
      ))}
    </div>
  );
};

export default ListTask;
