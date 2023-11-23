"use client"

import Header from "./components/header/Header";

import { useState } from "react";
import Input from "./components/input/Input";
import estilo from "./components/input/input.module.css";
import Link from "next/link";
import Hometest from "./teste/page";


export default function Home() {

  const vazio = '';

  const [task, setTesk] = useState(vazio);
  const [taskList, setTeskList] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTeskList([...taskList, task]);
      setTesk(vazio)
    } else {
      alert("Preencha Todos os Campos!")
    }
  }

  return (
 contato2
    <div className={estilo.body}>

      <Header></Header>
      <div className={estilo.box}>
        <h1 className={estilo.h1}>Entre em Contato Conosco</h1>

        <div className={estilo.inputs}>
          <input type="text" placeholder='Email'
            value={task}
            className={estilo.input1}
            onChange={(param) => setTesk(param.target.value)}
          />
          <input type="text" placeholder='Mensagem'
            value={task}
            className={estilo.input2}
            onChange={(param) => setTesk(param.target.value)}
          />

          <button onClick={addTask} className={estilo.button}>Cadastrar</button>
        </div>
      </div>

      {
        taskList.map((task, index) => (
          <Input index={index} task={task} />
        ))
      }

    </div>
  );

<>
<Header></Header>

<Link href={'/teste'}>Levar para página teste</Link>



<footer></footer>

</>    
  )
main
}
