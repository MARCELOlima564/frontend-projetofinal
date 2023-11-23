"use client"
import { useState } from "react";

 function Home() {
  const vazio = '';

  const [task, setTask] = useState(vazio);
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask(vazio);
    } else {
      alert("Preencha todos os campos!");
    }
  }
  return (
    <div>
      <h2>Registrar Obra</h2>

      <div>
        

        <input type="text"
          placeholder='Nome do Artista'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input type="text"
          placeholder='Nome da Obra'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input type="text"
          placeholder='Informaçoes sobre o artista'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input type="text"
          placeholder='Informaçoes sobre a obra'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input type="link"
          placeholder='Obra'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Registrar</button>
      </div>

      {
        taskList.map((task, index) => (
        <Inputs index={index} task={task} />
        ))
      }
    </div>
  );
}
