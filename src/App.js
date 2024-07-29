import Cart from "./components/Cart"
import './App.css';
import { useState } from "react";
import Win from "./components/Win"


const questions=[
  {
    title:"React-это...?",
    variants:["Библиотека","Фреймворк","Прилложение"],
    correct:0,
  },
  {
    title:'Компонент-это...',
    variants:["Приложение","Часть приложения","Функция"],
    correct:1
  },
  {
    title:"Что такое JSX?",
    variants:["Это просто HTML","Это просто функция","Это тот же HTML,но с возможностью выполнять в JS"],
    correct:2
  }
]

export default function App() {
  const[elem,setElem]=useState(0)
  const[res,setRes]=useState(0)

  const question=questions[elem]

  const pressing=(index)=>{
    setElem(elem+1)
    
    if(question.correct===index){
      setRes(res+1)
    }
   }

  const zaglushka=Math.round(elem/questions.length*100)

  return (
    <div className="App">
     <div className="app-inner">
      {elem===questions.length?<Win res={res} questions={questions}/>:<Cart question={question} press={pressing} cardInfo={zaglushka}/>}
     </div>
    </div>
  );
}

 
